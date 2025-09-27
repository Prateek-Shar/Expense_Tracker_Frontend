import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;

  const onlyHeaderRoutes = ["/home", "/report"];

  const noHeaderFooterRoutes = ["/signup", "/verify", "/signin", "/header", "/footer", "/"];

  const showNavbar = onlyHeaderRoutes.includes(path) && !noHeaderFooterRoutes.includes(path);

  const showFooter = false;

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
