import { useState } from "react";
import style from "./BookFreeDemoFrom.module.scss";
import { MdCheckCircleOutline } from "react-icons/md";

export default function BookFreeDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToStore = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      business: formData.business,
    };
    sendDataInSegmento(dataToStore);
    console.log("Form Data as JSON:", JSON.stringify(dataToStore));
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
    });
  };
  return (
    <>
      <div
        className={`${style.form_container} w-100 bg-light-blue p-lg-5 p-md-4 p-3 d-flex align-items-center justify-content-center rounded`}
      >
        {submitted ? (
          <div className="d-flex align-items-center justify-content-center flex-column gap-0">
            <MdCheckCircleOutline className={style.check} />
            <p className="col-primary c-fw-600 mb-0 c-fs-2">Thank You!</p>
            <p className="col-primary mb-0 c-fs-4 text-center">
              Your demo request has been submitted successfully. Our team will
              get in touch with you shortly.
            </p>
          </div>
        ) : (
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
                  placeholder="Contact No."
                  required
                  className="form-control border-0 c-fs-5"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="business"
                  aria-label="Business name"
                  placeholder="Business Name"
                  required
                  className="form-control border-0 c-fs-5"
                  value={formData.business}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100 "
                aria-label="Signup for Accounting Software"
              >
                Book Free Demo
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

function sendDataInSegmento(data) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authkey: process.env.MSG91_AUTH_KEY,
    },
    body: JSON.stringify(data),
  };

  fetch(
    `https://control.msg91.com/api/v5/segmento/api/v1/phonebooks/${process.env.MSG91_PHONEBOOK_ID}/contacts`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
