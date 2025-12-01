import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const hiddenNavbarRoutes = ['/dashboard', '/dashboard/courses', '/dashboard/purchases', '/social/new', '/social/newsfeed', '/social/chat'];
  const hiddenFooterRoutes = ['/dashboard', '/dashboard/courses', '/dashboard/purchases', '/social/new', '/social/newsfeed', '/social/chat'];
  const shouldHideNavbar = hiddenNavbarRoutes.some(route => location.pathname.startsWith(route.split('/')[1] === 'dashboard' || route.split('/')[1] === 'social' ? `/${route.split('/')[1]}` : route));
  const shouldHideFooter = hiddenFooterRoutes.some(route => location.pathname.startsWith(route.split('/')[1] === 'dashboard' || route.split('/')[1] === 'social' ? `/${route.split('/')[1]}` : route));

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {!shouldHideFooter && <Footer />}
    </div>
  );
};

export default Layout;
