import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import { saveProfile, startSession } from "@/utils/giddhCert/clientApi";
import { isValidMobile } from "@/utils/giddhCert/serverApi";
import { getResendChannels, initOtpWidget } from "@/utils/msg91Otp";
import { formatMobileNumber, showToaster } from "@/utils/signupHelpers";

import {
  MobileForm,
  OtpForm,
  RegistrationForm,
} from "./ApplyForms";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

function getUniqueChannels(resendChannels) {
  const seen = new Set();
  return resendChannels.filter((channel) => {
    if (!channel.value || seen.has(channel.value)) {
      return false;
    }
    seen.add(channel.value);
    return true;
  });
}

export default function ApplyOverlay({
  isOpen,
  onClose,
  flowPhase,
  setFlowPhase,
  mobile,
  setMobile,
  countryCode,
  onVerified,
  onRegistered,
  compData,
}) {
  const [otp, setOtp] = useState("");
  const [requestId, setRequestId] = useState("");
  const [resendChannels, setResendChannels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    profession: "",
    city: "",
  });

  useEffect(() => {
    if (!isOpen || typeof window === "undefined") {
      return;
    }
    initOtpWidget(() => setResendChannels(getResendChannels()));
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const fullMobileNo = formatMobileNumber(`${countryCode}${mobile}`);
  const uniqueChannels = getUniqueChannels(resendChannels);
  const canSendOtp = isValidMobile(mobile) && isTermsAccepted;

  const handleSendOtp = (event) => {
    event.preventDefault();
    if (!canSendOtp) {
      return;
    }
    setIsLoading(true);
    window.sendOtp(
      fullMobileNo,
      (data) => {
        setIsLoading(false);
        setRequestId(data.message);
        setOtp("");
        setFlowPhase("otp");
      },
      (error) => {
        setIsLoading(false);
        setRequestId("");
        showToaster(error.message, "error", "top-center");
      }
    );
  };

  const handleVerifyOtp = async (event) => {
    event.preventDefault();
    if (!otp || !requestId) {
      return;
    }
    setIsLoading(true);
    window.verifyOtp(
      otp,
      async () => {
        try {
          const data = await startSession({ mobile, countryCode });
          if (data?.message) {
            showToaster(data.message, "success", "top-center");
          }
          onVerified?.(data);
        } catch (error) {
          showToaster(error.message, "error", "top-center");
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        setIsLoading(false);
        setOtp("");
        showToaster(error.message, "error", "top-center");
      },
      requestId
    );
  };

  const handleResendOtp = (channel) => {
    if (!requestId) {
      return;
    }
    setIsLoading(true);
    setOtp("");
    window.retryOtp(
      channel,
      () => {
        setIsLoading(false);
      },
      (error) => {
        setIsLoading(false);
        showToaster(error.message, "error", "top-center");
      },
      requestId
    );
  };

  const handleChangeMobile = () => {
    setOtp("");
    setRequestId("");
    setFlowPhase("mobile");
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (
      !EMAIL_REGEX.test(form.email.trim()) ||
      !form.name.trim() ||
      !form.profession ||
      !form.city.trim()
    ) {
      return;
    }

    setIsLoading(true);
    try {
      const data = await saveProfile({
        mobile,
        countryCode,
        name: form.name.trim(),
        email: form.email.trim(),
        designation: form.profession,
        city: form.city.trim(),
      });
      onRegistered?.(data);
    } catch (error) {
      showToaster(error.message, "error", "top-center");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="modal fade show d-block bg-dark bg-opacity-75"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content border-0 rounded-3 overflow-hidden outfit-font position-relative">
          <button
            type="button"
            className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
            aria-label={compData?.closeAriaLabel}
            onClick={onClose}
          >
            <MdClose size={20} />
          </button>

          <div className="row g-0">
            <div className="col-12 col-lg-6 p-4 p-md-5 d-flex flex-column justify-content-center gap-3">
              {compData?.eyebrow ? (
                <p className="font-xs font-600 font-grey-deep m-0">
                  {compData.eyebrow}
                </p>
              ) : null}
              {compData?.heading ? (
                <h2 className="heading font-600 lh-sm m-0">{compData.heading}</h2>
              ) : null}
              {compData?.description ? (
                <p className="font-sm font-slate-grey m-0 lh-lg">
                  {compData.description}
                </p>
              ) : null}
            </div>

            <div className="col-12 col-lg-6 p-4 p-md-5 bg-extra-light-blue d-flex flex-column justify-content-center">
              {flowPhase === "mobile" ? (
                <MobileForm
                  mobile={mobile}
                  setMobile={setMobile}
                  isTermsAccepted={isTermsAccepted}
                  setIsTermsAccepted={setIsTermsAccepted}
                  canSendOtp={canSendOtp}
                  isLoading={isLoading}
                  onSubmit={handleSendOtp}
                  compData={compData}
                />
              ) : null}
              {flowPhase === "otp" ? (
                <OtpForm
                  otp={otp}
                  setOtp={setOtp}
                  mobile={mobile}
                  countryCode={countryCode}
                  uniqueChannels={uniqueChannels}
                  isLoading={isLoading}
                  onSubmit={handleVerifyOtp}
                  onResend={handleResendOtp}
                  onChangeMobile={handleChangeMobile}
                  compData={compData}
                />
              ) : null}
              {flowPhase === "registration" ? (
                <RegistrationForm
                  form={form}
                  setForm={setForm}
                  isLoading={isLoading}
                  onSubmit={handleRegister}
                  compData={compData}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
