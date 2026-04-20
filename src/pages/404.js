import Link from "next/link";
import { useRouter } from "next/router";
import { MdArrowBack, MdOutlineHome, MdOutlineEmail } from "react-icons/md";

export default function Custom404() {
  const router = useRouter();
  return (
    <section className="bg-white py-5 outfit-font vh-100 d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center text-center gap-2">
        <h1 className="font-primary display-1 fw-bold">404</h1>
        <p className="font-slate-grey font-md">
          The page you&apos;re trying to reach isn&apos;t available or
          doesn&apos;t exist.
        </p>
        <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
          <button
            onClick={() => router.back()}
            className="btn btn-primary d-inline-flex align-items-center justify-content-center gap-1"
          >
            <MdArrowBack />
            <span>Go Back</span>
          </button>
          <Link
            href="/"
            className="btn btn-primary-outline d-inline-flex align-items-center justify-content-center gap-1"
          >
            <MdOutlineHome />
            <span>Go to Homepage</span>
          </Link>
          <Link
            href="/contact-us"
            className="btn btn-primary-outline d-inline-flex align-items-center justify-content-center gap-1"
          >
            <MdOutlineEmail />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
