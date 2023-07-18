import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
