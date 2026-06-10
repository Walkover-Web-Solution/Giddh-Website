import { useState, useCallback, useEffect, useId, useRef } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import style from "./BookFreeDemoForm.module.scss";
import FormFields from "./FormFields";
import { getUtmParamsFromCookies } from "@/utils/utmParams";
import { initOtpWidget, getResendChannels } from "@/utils/msg91Otp";
import { setupPhoneInput } from "@/utils/phoneInput";
import { sendDataInSegmento } from "@/utils/segmento";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
};

const initialOtpState = ["", "", "", ""];

export default function BookFreeDemoForm({
  hiddenAbsolute,
  location,
  heading,
  verticalFields,
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showMobileOtp, setShowMobileOtp] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [otp, setOtp] = useState(initialOtpState);
  const [getOtpInProgress, setGetOtpInProgress] = useState(false);
  const [verifyOtpInProgress, setVerifyOtpInProgress] = useState(false);
  const [resendChannels, setResendChannels] = useState([]);

  const phoneInputRef = useRef(null);
  const intlRef = useRef(null);
  const formId = useId().replace(/:/g, "");
  const router = useRouter();

  useEffect(() => {
    initOtpWidget(() => setResendChannels(getResendChannels()));
    setupPhoneInput(phoneInputRef, intlRef);

    return () => {
      if (intlRef.current?.destroy) {
        intlRef.current.destroy();
        intlRef.current = null;
      }
      const input = phoneInputRef.current;
      if (input) {
        delete input.dataset.intlTelInitialized;
      }
    };
  }, []);

  const getMobileNo = () =>
    formatMobileNumber(intlRef.current?.getNumber?.() || "");

  const resetMobileVerification = useCallback(() => {
    setShowMobileOtp(false);
    setMobileVerified(false);
    setRequestId("");
    setOtp(initialOtpState);
    setFormData((prev) => ({ ...prev, phone: "" }));
    if (phoneInputRef.current) {
      phoneInputRef.current.value = "";
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendMobileOtp = useCallback(() => {
    const mobileNo = getMobileNo();
    if (!mobileNo) {
      toast("Please enter valid mobile number!", {
        type: "error",
        position: "top-center",
      });
      return;
    }

    setGetOtpInProgress(true);
    window.sendOtp(
      mobileNo,
      (data) => {
        setGetOtpInProgress(false);
        toast("OTP sent successfully.", {
          type: "success",
          position: "top-center",
        });
        setRequestId(data.message);
        setShowMobileOtp(true);
        setOtp(initialOtpState);
      },
      (error) => {
        setGetOtpInProgress(false);
        toast(error.message, { type: "error", position: "top-center" });
        setShowMobileOtp(false);
        setRequestId("");
      }
    );
  }, []);

  const verifyMobileOtp = useCallback(() => {
    const otpValue = otp.join("");
    if (!otpValue) {
      toast("Please enter OTP!", { type: "error", position: "top-center" });
      return;
    }

    setVerifyOtpInProgress(true);
    window.verifyOtp(
      otpValue,
      () => {
        setVerifyOtpInProgress(false);
        toast("OTP verified successfully.", {
          type: "success",
          position: "top-center",
        });
        setFormData((prev) => ({ ...prev, phone: getMobileNo() }));
        setMobileVerified(true);
        setShowMobileOtp(false);
      },
      (error) => {
        setVerifyOtpInProgress(false);
        toast(error.message, { type: "error", position: "top-center" });
      },
      requestId
    );
  }, [otp, requestId]);

  const resendMobileOtp = useCallback(
    (channel) => {
      setGetOtpInProgress(true);
      setOtp(initialOtpState);
      window.retryOtp(
        channel,
        () => {
          setGetOtpInProgress(false);
          toast("OTP resent successfully.", {
            type: "success",
            position: "top-center",
          });
        },
        (error) => {
          setGetOtpInProgress(false);
          toast(error.message, { type: "error", position: "top-center" });
        },
        requestId
      );
    },
    [requestId]
  );

  const handleOtpChange = useCallback(
    (index, value) => {
      if (value && !/^\d$/.test(value)) {
        return;
      }

      setOtp((prev) => {
        const next = [...prev];
        next[index] = value;
        return next;
      });

      if (value && index < 3) {
        document.getElementById(`${formId}-otp-${index + 1}`)?.focus();
      }
    },
    [formId]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (!mobileVerified) {
        setError("Please verify your mobile number");
        return;
      }

      setSubmitting(true);
      setError("");

      try {
        const data = await sendDataInSegmento({
          input: { ...formData, ...getUtmParamsFromCookies() },
        });

        if (data?.status === "success") {
          setFormData(initialFormState);
          resetMobileVerification();
          router.push("/thank-you");
        } else {
          setError(data?.errors || "Unknown error");
        }
      } catch (err) {
        setError("Submission failed. Please try again.");
        console.error("Error submitting form:", err);
      } finally {
        setSubmitting(false);
      }
    },
    [formData, mobileVerified, resetMobileVerification, router]
  );

  const submitLabel = submitting
    ? "Scheduling..."
    : location === "banner"
      ? "Book A Free Demo"
      : "Book Free Demo";

  const form = (
    <form
      onSubmit={handleSubmit}
      className="w-100 gap-3 d-flex flex-column"
      autoComplete="on"
    >
      <FormFields
        formData={formData}
        handleChange={handleChange}
        error={error}
        location={location}
        verticalFields={verticalFields}
        formId={formId}
        phoneInputRef={phoneInputRef}
        showMobileOtp={showMobileOtp}
        mobileVerified={mobileVerified}
        otp={otp}
        getOtpInProgress={getOtpInProgress}
        verifyOtpInProgress={verifyOtpInProgress}
        resendChannels={resendChannels}
        sendMobileOtp={sendMobileOtp}
        verifyMobileOtp={verifyMobileOtp}
        resendMobileOtp={resendMobileOtp}
        resetMobileVerification={resetMobileVerification}
        handleOtpChange={handleOtpChange}
      />
      <button
        type="submit"
        className={`btn ${
          submitting || !mobileVerified ? "btn-disabled" : "btn-primary"
        } w-100 d-flex align-items-center justify-content-center ${
          location === "banner"
            ? "rounded-3 py-3 px-4 c-fw-600 c-fs-5 mt-1"
            : "px-3 py-2 rounded"
        }`}
        disabled={submitting || !mobileVerified}
      >
        {submitLabel}
      </button>
    </form>
  );

  if (location === "banner") {
    return (
      <div
        className={`outfit-font col-lg-5 col-md-6 col-12 w-100 ${style.bannerForm} d-flex flex-column bg-white rounded-4 p-4 overflow-visible`}
      >
        <div className="d-flex gap-3 mb-4">
          <div className="border-start border-4 border-primary rounded flex-shrink-0 align-self-stretch" />
          <div>
            <h2 className="font-md font-600 font-primary m-0 lh-sm">
              Experience Premium Accounting
            </h2>
            <p className="font-sm font-grey-deep mt-2 mb-0 lh-base">
              Fill in your details below to activate your demo.
            </p>
          </div>
        </div>
        {form}
      </div>
    );
  }

  return (
    <div
      className={`${style.form_container} w-100 bg-extra-light-blue p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center rounded`}
    >
      <div className="d-flex align-items-center justify-content-center flex-column gap-3 w-100">
        <p className="col-primary c-fw-600 mb-0 c-fs-3">
          {heading ? "Explore the Advanced Accounting Features of Giddh" : ""}
        </p>
        {form}
      </div>
    </div>
  );
}
