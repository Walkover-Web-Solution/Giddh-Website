import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import style from "./BookFreeDemoForm.module.scss";
import { MdChevronRight, MdClose } from "react-icons/md";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  business: "",
};

export default function BookFreeDemoForm({
  hiddenAbsolute,
  location,
  heading,
  verticalFileds,
}) {
  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showAbsoluteModal, setShowAbsoluteModal] = useState(false);
  const router = useRouter();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setSubmitting(true);
      setError("");
      const dataToStore = { input: { ...formData } };
      try {
        const data = await sendDataInSegmento(dataToStore);
        if (data?.status === "success") {
          setFormData(initialFormState);
          router.push("/thank-you");
        } else {
          setError(data?.errors || "Unknown error");
          console.error("Error submitting form:", data?.error);
        }
      } catch (err) {
        setError("Submission failed. Please try again.");
        console.error("Error submitting form:", err);
      } finally {
        setSubmitting(false);
      }
    },
    [formData, router]
  );

  if (location === "banner") {
    return (
      <div
        className={`outfit-font card col-lg-5 col-md-6 col-12 p-4 gap-4 rounded ${style.form_container} d-flex flex-column align-items-center justify-content-center`}
      >
        <span className="col-primary c-fw-600 c-fs-3 mb-4">
          Upgrade Your Accounting with Giddh
        </span>
        <form
          onSubmit={handleSubmit}
          className="w-100 gap-3 d-flex flex-column"
        >
          <FormFields
            formData={formData}
            handleChange={handleChange}
            error={error}
            verticalFileds={verticalFileds}
          />
          <button
            type="submit"
            className="btn btn-primary w-100  d-flex align-items-center justify-content-center px-3 py-2 rounded"
            disabled={submitting}
          >
            {submitting ? "Scheduling..." : "Book A Free Demo"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <>
      {!hiddenAbsolute &&
        (!showAbsoluteModal ? (
          <div
            className={`${style.bookdemo_btn_cont} d-flex align-items-end justify-content-end`}
          >
            <button
              className={`btn btn-primary btn-lg ${style.bookdemo_btn}`}
              onClick={() => setShowAbsoluteModal(true)}
              type="button"
            >
              <MdChevronRight className="c-fs-4" /> Free Demo
            </button>
          </div>
        ) : (
          <div
            className={`${style.absolute_form_container} bg-light-blue p-4 d-flex gap-2 flex-column align-items-center justify-content-center rounded`}
          >
            <div className="d-flex align-items-center justify-content-center flex-column gap-3 w-100">
              <div className="d-flex justify-content-between align-items-center w-100">
                <p className="col-primary c-fw-600 mb-0 c-fs-4">
                  Book Free Demo
                </p>
                <span
                  role="button"
                  className="ms-auto"
                  onClick={() => setShowAbsoluteModal(false)}
                  tabIndex={0}
                  aria-label="Close"
                >
                  <MdClose className="c-fs-2" />
                </span>
              </div>
              <form
                onSubmit={handleSubmit}
                className="w-100 gap-3 d-flex flex-column"
                autoComplete="on"
              >
                <FormFields
                  formData={formData}
                  handleChange={handleChange}
                  error={error}
                  isAbsolute={true}
                />
                <button
                  type="submit"
                  className={`btn btn-lg ${
                    submitting ? "btn-disabled" : "btn-primary"
                  } w-100`}
                  aria-label="Signup for Accounting Software"
                  disabled={submitting}
                  style={{ cursor: submitting ? "not-allowed" : "pointer" }}
                >
                  {submitting ? "Scheduling..." : "Book Free Demo"}
                </button>
              </form>
            </div>
          </div>
        ))}

      <div
        className={`${style.form_container} w-100 bg-light-blue p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center rounded`}
      >
        <div className="d-flex align-items-center  justify-content-center flex-column gap-3 w-100">
          <p className="col-primary c-fw-600 mb-0 c-fs-3">
            {heading ? "Explore the Advanced Accounting Features of Giddh" : ""}
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-100 gap-3 d-flex flex-column"
            autoComplete="on"
          >
            <FormFields
              formData={formData}
              handleChange={handleChange}
              error={error}
              verticalFileds={verticalFileds}
            />
            <button
              type="submit"
              className={`btn ${
                submitting ? "btn-disabled" : "btn-primary"
              } w-100`}
              disabled={submitting}
              style={{ cursor: submitting ? "not-allowed" : "pointer" }}
            >
              {submitting ? "Scheduling..." : "Book Free Demo"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function FormFields({
  formData,
  handleChange,
  error,
  isAbsolute,
  verticalFileds,
}) {
  return (
    <div className="w-100 gap-4 d-flex flex-column">
      <div
        className={`d-flex m-0 gap-4 flex-column  ${
          isAbsolute || verticalFileds ? "flex-column" : "flex-md-row"
        }`}
      >
        <div className="w-100">
          <input
            type="text"
            name="name"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Name*"
            required
            value={formData.name}
            onChange={handleChange}
            autoComplete="name"
          />
        </div>
        <div className="w-100">
          <input
            type="text"
            name="phone"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Mobile Number*"
            required
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </div>
      </div>
      <div
        className={`d-flex m-0 gap-4 flex-column mb-3 ${
          isAbsolute || verticalFileds ? "flex-column" : "flex-md-row"
        }`}
      >
        <div className="w-100">
          <input
            type="text"
            name="business"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Business Name"
            value={formData.business}
            onChange={handleChange}
            autoComplete="organization"
          />
        </div>
        <div className="w-100">
          <input
            type="email"
            name="email"
            className={`form-control form-control-lg ${style.formPlaceholder}`}
            placeholder="Email Address*"
            required
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
          />
        </div>
      </div>
      {error && (
        <div className="alert alert-danger w-100" role="alert">
          Error submitting form: {error}
        </div>
      )}
    </div>
  );
}

async function sendDataInSegmento(data) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      tokenAuth: process.env.NEXT_PUBLIC_MSG91_AUTH_KEY,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_MSG91_PHONEBOOK_URL,
      options
    );
    return await response.json();
  } catch (err) {
    console.error(err);
    return { status: "error", message: err.message };
  }
}
