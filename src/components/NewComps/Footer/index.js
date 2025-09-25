import Image from "next/image";
export default function Footer() {
  return (
    <footer
      className={`d-flex align-items-center bg-light-blue`}
    >
      <div className="container py-5">
        <div className="d-flex align-items-center justify-content-center">
          <Image
            src="/img/giddh-logo.svg"
            alt="Giddh Logo"
            width={180}
            height={36}
          />
        </div>
      </div>
    </footer>
  );
}
