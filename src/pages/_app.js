import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
