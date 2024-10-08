import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Preloader from "./common/Preloader";
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { Toaster } from "./ui/sonner";
import ScrollToTop from "./common/ScrollToTop";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <ShoppingCartProvider>
      <Preloader />
      <ScrollToTop />
      <Toaster richColors theme="light" />
      <Header />
      <main className="px-3 md:px-7 py-16 md:py-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </ShoppingCartProvider>
  );
};

export default Layout;
