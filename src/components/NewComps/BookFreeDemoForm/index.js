import { useState } from "react";
import { useRouter } from "next/router";
import style from "./BookFreeDemoForm.module.scss";

export default function BookFreeDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    setSubmitting(true);
    e.preventDefault();
    const dataToStore = {
      input: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        business: formData.business,
      },
    };
    try {
      const data = await sendDataInSegmento(dataToStore);
      if (data?.status === "success") {
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
        });
        router.push("/thank-you");
        setSubmitting(false);
      } else {
        setError(data?.errors);
        console.error("Error submitting form:", data?.error);
        setSubmitting(false);
      }
    } catch (error) {
      setSubmitting(false);
      setError(data.errors);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div
      className={`${style.form_container} w-100 bg-light-blue p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center rounded`}
    >
      <div className="d-flex align-items-center justify-content-center flex-column gap-3 w-100">
        <p className="col-primary c-fw-600 mb-0 c-fs-4">
          Explore the Advanced Accounting Features of Giddh
        </p>
        <form onSubmit={handleSubmit} className="w-100">
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
            />
          </div>
          {error && (
            <div className="alert alert-danger w-100" role="alert">
              Error submitting form: {error}
            </div>
          )}

          <button
            type="submit"
            className={`btn ${
              submitting ? "btn-disabled" : "btn-primary"
            } w-100`}
            aria-label="Signup for Accounting Software"
          >
            {submitting ? "Scheduling..." : "Book Free Demo"}
          </button>
        </form>
      </div>
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
      `${process.env.NEXT_PUBLIC_MSG91_PHONEBOOK_URL}`,
      options
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
    return { status: "error", message: err.message };
  }
}
