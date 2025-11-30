import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Menu, X, GraduationCap, User } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/books", label: "Books" },
    { to: "/pre-recorded", label: "Pre-Recorded" },
    { to: "/study-material", label: "Study Material" },
    { to: "/consultation", label: "1:1 Consultation" },
    { to: "/webinar", label: "Webinar" },
    { to: "/blogs", label: "Blogs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md border-b" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-2xl font-black text-[#0B1A2A]">
              Learn<span className="text-gradient">Sphere</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* CTA Buttons / User Profile */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <NavLink to="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center text-white font-bold">
                  {user?.email?.[0].toUpperCase() || <User className="h-5 w-5" />}
                </div>
                <span className="font-semibold text-[#0B1A2A]">
                  {user?.email?.split('@')[0] || 'User'}
                </span>
              </NavLink>
            ) : (
              <>
                <NavLink to="/login">
                  <Button variant="ghost" className="font-semibold text-[#667085] hover:text-[#0B1A2A]">
                    Log In
                  </Button>
                </NavLink>
                <NavLink to="/signup">
                  <Button className="bg-gradient-orange text-white font-semibold rounded-full px-6 hover:shadow-glow-orange hover:-translate-y-0.5 transition-all">
                    Get Started
                  </Button>
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="block py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
                activeClassName="text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-4 space-y-3">
              {isAuthenticated ? (
                <NavLink to="/dashboard" className="block">
                  <Button className="w-full bg-gradient-orange text-white font-semibold rounded-full">
                    Dashboard
                  </Button>
                </NavLink>
              ) : (
                <>
                  <NavLink to="/login" className="block">
                    <Button variant="outline" className="w-full">
                      Log In
                    </Button>
                  </NavLink>
                  <NavLink to="/signup" className="block">
                    <Button className="w-full bg-gradient-orange text-white font-semibold rounded-full">
                      Get Started
                    </Button>
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
