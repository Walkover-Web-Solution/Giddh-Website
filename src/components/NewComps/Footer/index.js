import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.facebook.com/giddh",
    label: "Facebook",
    Icon: FaFacebook,
  },
  {
    href: "https://x.com/giddhcom",
    label: "X (Twitter)",
    Icon: FaTwitter,
  },
  {
    href: "https://www.linkedin.com/company/giddh-com/",
    label: "LinkedIn",
    Icon: FaLinkedin,
  },
  {
    href: "https://www.instagram.com/giddhbooks/",
    label: "Instagram",
    Icon: FaInstagram,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent font-white outfit-font">
      <div className="container py-5">
        <div className="row g-4 pb-4 border-bottom border-blue-light">
          <div className="col-md-6">
            <h3 className="font-sm font-600 text-uppercase mb-3">Contact</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 mb-0 font-sm">
              <li>
                <span className="font-600">Sales:</span>{" "}
                <a
                  href="mailto:falcon@giddh.com"
                  className="font-white text-decoration-none"
                >
                  falcon@giddh.com
                </a>
                ,{" "}
                <a
                  href="mailto:panther@giddh.com"
                  className="font-white text-decoration-none"
                >
                  panther@giddh.com
                </a>
              </li>
              <li>
                <span className="font-600">Support:</span>{" "}
                <a
                  href="mailto:support@giddh.com"
                  className="font-white text-decoration-none"
                >
                  support@giddh.com
                </a>
              </li>
              <li>
                <span className="font-600">Phone:</span>{" "}
                <a
                  href="tel:+918889500411"
                  className="font-white text-decoration-none"
                >
                  +91-88895-00411
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6">
            <h3 className="font-sm font-600 text-uppercase mb-3">Address</h3>
            <address className="mb-0 font-sm">
              5th Floor, LIC Tower, AB Rd, opposite Orbit Mall, behind Raghunath
              Petrol Pump, Vijay Nagar, Scheme No 54, Indore, Madhya Pradesh
              452010
            </address>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3 pt-4">
          <p className="mb-0 font-sm">
            &copy; {year} Walkover Technologies Pvt Ltd.
          </p>

          <ul className="list-unstyled d-flex align-items-center gap-3 mb-0">
            {socialLinks.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="font-white d-inline-flex"
                >
                  <Icon size={22} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
