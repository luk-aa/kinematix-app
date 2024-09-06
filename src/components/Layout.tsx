import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="px-3 md:px-7 py-16 md:py-20 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
