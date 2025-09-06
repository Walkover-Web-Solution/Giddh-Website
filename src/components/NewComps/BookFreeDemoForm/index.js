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

function FormFields({ formData, handleChange, error }) {
  return (
    <div className="d-flex flex-column gap-2 input-group-lg mb-4">
      <input
        type="text"
        name="name"
        aria-label="Name"
        placeholder="Name*"
        required
        className="form-control border-0 c-fs-5"
        value={formData.name}
        onChange={handleChange}
        autoComplete="name"
      />
      <input
        type="email"
        name="email"
        aria-label="Email"
        placeholder="Email*"
        required
        className="form-control border-0 c-fs-5"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
      />
      <input
        type="tel"
        name="phone"
        aria-label="Phone Number"
        placeholder="Contact No.*"
        required
        className="form-control border-0 c-fs-5"
        value={formData.phone}
        onChange={handleChange}
        autoComplete="tel"
      />
      <input
        type="text"
        name="business"
        aria-label="Business name"
        placeholder="Business Name*"
        required
        className="form-control border-0 c-fs-5"
        value={formData.business}
        onChange={handleChange}
        autoComplete="organization"
      />
      {error && (
        <div className="alert alert-danger w-100" role="alert">
          Error submitting form: {error}
        </div>
      )}
    </div>
  );
}

export default function BookFreeDemoForm({ hiddenAbsolute , location , Heading }) {
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
      <div className="col-lg-6 d-flex justify-content-lg-end ">
        <div className="card shadow-sm p-5 banner-form-card  mx-auto " style={{ height: "100%", width: "100%" }}>
          <h5 className="mb-3 p-3 fw-bold banner-form-title" style={{ fontSize: "24px", color: "#1A237E" }}>
            Discover How GIDDH Can Simplify Your Accounting
          </h5>
          <form onSubmit={handleSubmit} className="w-100" autoComplete="on">
            <div className="row g-5 mb-3 ">
              <div className="col-6 pb-2">
                <input 
                  type="text" 
                  name="name"
                  className="form-control custom-form-input" 
                  placeholder="Name*" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
              </div>
              <div className="col-6">
                <input 
                  type="text" 
                  name="phone"
                  className="form-control custom-form-input" 
                  placeholder="Mobile Number*" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>
            </div>
            <div className="row g-5 mb-3 pb-2">
              <div className="col-6">
                <input 
                  type="text" 
                  name="business"
                  className="form-control custom-form-input" 
                  placeholder="Business Name" 
                  value={formData.business}
                  onChange={handleChange}
                  autoComplete="organization"
                />
              </div>
              <div className="col-6">
                <input 
                  type="email" 
                  name="email"
                  className="form-control custom-form-input" 
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
            <div className="form-check pb-4  " style={{  color: "#3F4346" }}>
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                required
                style={{
                  border: "1px solid #3F4346",
                  borderRadius: "2px"
                }}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                I accept the <a href=" " target="_blank" className="text-decoration-underline " style={{ fontFamily: "Outfit, sans-serif" , color: "#3F4346" }}>Terms & Conditions</a>
              </label>
            </div>
            <button 
              type="submit" 
              className="btn btn-primary w-100 fw-semibold d-flex align-items-center justify-content-center 
                        px-3 py-2 rounded"
              style={{
                backgroundColor: "#1A237E",
                height: "52px",
                gap: "10px",
                borderRadius: "8px",
                cursor: submitting ? "not-allowed" : "pointer"
              }}
              disabled={submitting}
            >
              {submitting ? "Scheduling..." : "Book A Free Demo"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <>
      {!hiddenAbsolute && (
        !showAbsoluteModal ? (
          <div className={`${style.bookdemo_btn_cont} d-flex align-items-end justify-content-end`}>
            <button
              className={`btn btn-primary btn-lg ${style.bookdemo_btn}`}
              onClick={() => setShowAbsoluteModal(true)}
              type="button"
              style={{ cursor: 'pointer' }}
            >
              <MdChevronRight className="c-fs-4" /> Free Demo
            </button>
          </div>
        ) : (
          <div className={`${style.absolute_form_container} bg-light-blue p-4 d-flex gap-2 flex-column align-items-center justify-content-center rounded`}>
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
              <form onSubmit={handleSubmit} className="w-100" autoComplete="on">
                <FormFields formData={formData} handleChange={handleChange} error={error} />
                <button
                  type="submit"
                  className={`btn ${submitting ? "btn-disabled" : "btn-primary"} w-100`}
                  aria-label="Signup for Accounting Software"
                  disabled={submitting}
                  style={{ cursor: submitting ? "not-allowed" : "pointer" }}
                >
                  {submitting ? "Scheduling..." : "Book Free Demo"}
                </button>
              </form>
            </div>
          </div>
        )
      )}

      <div className={`${style.form_container} w-100 bg-light-blue p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center rounded`}>
        <div className="d-flex align-items-center  justify-content-center flex-column gap-3 w-100">
          <p className="col-primary c-fw-600 mb-0 c-fs-4">
            {Heading ? "Explore the Advanced Accounting Features of Giddh" : ""}
           
          </p>
          <form onSubmit={handleSubmit} className="w-100" autoComplete="on">
            <FormFields formData={formData} handleChange={handleChange} error={error} />
            <button
              type="submit"
              className={`btn ${submitting ? "btn-disabled" : "btn-primary"} w-100`}
              aria-label="Signup for Accounting Software"
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
