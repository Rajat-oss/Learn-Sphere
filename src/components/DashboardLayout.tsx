import { useState, useRef, useEffect, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  BookOpen,
  ShoppingBag,
  Users,
  Bell,
  MessageCircle,
  User,
  Award,
  LogOut,
  ChevronDown,
} from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDropdown]);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: BookOpen, label: "Courses", path: "/dashboard/courses" },
    { icon: ShoppingBag, label: "Additional Purchases", path: "/dashboard/purchases" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 fixed h-full flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">LearnSphere</h2>
        </div>
        <nav className="px-4 space-y-2 flex-1">
          {sidebarItems.map((item, i) => (
            <NavLink
              key={i}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-orange-50 text-orange-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
          
          {/* Social Connect with Dropdown */}
          <div>
            <button
              onClick={() => setShowSocialMenu(!showSocialMenu)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5" />
                <span className="font-medium">Social Connect</span>
              </div>
              <ChevronDown className={`h-4 w-4 transition-transform ${showSocialMenu ? 'rotate-180' : ''}`} />
            </button>
            {showSocialMenu && (
              <div className="ml-4 mt-2 space-y-1">
                <NavLink to="/social/new" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                  New
                </NavLink>
                <NavLink to="/social/newsfeed" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                  Newsfeed
                </NavLink>
                <NavLink to="/social/chat" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                  Chat
                </NavLink>
              </div>
            )}
          </div>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-y-auto">
        {/* Top Navigation */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-end gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDropdown(!showDropdown);
                }}
                className="flex items-center gap-3 hover:bg-gray-50 rounded-full px-3 py-2 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">
                  {user?.email?.[0].toUpperCase() || "U"}
                </div>
                <span className="font-medium text-gray-700">
                  {user?.email?.split("@")[0] || "User"}
                </span>
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-200 py-2 z-[100]">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm text-gray-500">Hi,</p>
                    <p className="font-semibold text-gray-800">
                      {user?.email?.split("@")[0] || "User"}
                    </p>
                  </div>
                  <div className="py-2">
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700">
                      <User className="h-4 w-4" />
                      <span className="text-sm">My Profile</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700">
                      <ShoppingBag className="h-4 w-4" />
                      <span className="text-sm">Purchase History</span>
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700">
                      <Award className="h-4 w-4" />
                      <span className="text-sm">My Certificates</span>
                    </button>
                    <div className="border-t border-gray-100 my-2"></div>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors text-red-600"
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm">Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
