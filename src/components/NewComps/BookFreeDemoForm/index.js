import { useState } from "react";

export default function BookFreeDemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
  });

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
    console.log("Form Data as JSON:", JSON.stringify(dataToStore));
    setFormData({
      name: "",
      email: "",
      phone: "",
      business: "",
    });
  };
  return (
    <>
      <div className="col-5 bg-light-blue p-5 d-flex flex-column gap-3 rounded">
        <p className="col-primary c-fw-600 mb-0 c-fs-4">
          Explore the Advanced Accounting Features of Giddh
        </p>
        <form onSubmit={handleSubmit}>
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
    </>
  );
}
