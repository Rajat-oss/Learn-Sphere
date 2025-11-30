import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hiddenFooterRoutes = ['/dashboard'];
  const shouldHideFooter = hiddenFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Layout;
