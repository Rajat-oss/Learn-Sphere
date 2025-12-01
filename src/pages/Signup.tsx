import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, X } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signup(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await loginWithGoogle();
      navigate('/dashboard');
    } catch (error) {
      console.error('Google signup failed:', error);
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-300 min-h-screen">
      <Card className="relative w-full max-w-md bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] border border-orange-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-orange-500/20 backdrop-blur-xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 max-h-[90vh] overflow-y-auto">
        <NavLink to="/" className="sticky top-3 sm:top-4 right-3 sm:right-4 float-right p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all z-10">
          <X className="h-5 w-5" />
        </NavLink>

        <div className="p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
          <div className="text-center space-y-1 sm:space-y-2">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">Create Account</h1>
            <p className="text-sm sm:text-base text-gray-400">Join us and start your journey</p>
          </div>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-orange-500 transition-colors" />
              <Input
                type="text"
                placeholder="Full name"
                className="pl-12 h-14 bg-white/5 border border-white/20 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-orange-500 transition-colors" />
              <Input
                type="email"
                placeholder="Email address"
                className="pl-12 h-14 bg-white/5 border border-white/20 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 focus:bg-white/10 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">+91</span>
              <Input
                type="tel"
                placeholder="Mobile number"
                className="pl-16 h-14 bg-white/5 border border-white/20 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 focus:bg-white/10 transition-all"
              />
            </div>

            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-orange-500 transition-colors" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className="pl-12 pr-12 h-14 bg-white/5 border border-white/20 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 focus:bg-white/10 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <Button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-[#FF7A2B] to-[#FF9E4A] hover:from-[#FF9E4A] hover:to-[#FF7A2B] text-white font-bold rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Create Account
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-[#0D1B2A] text-gray-400">Or sign up with</span>
              </div>
            </div>

            <Button 
              type="button" 
              variant="outline" 
              className="w-full h-12 bg-white/5 border border-white/20 text-white hover:bg-white/10 rounded-xl transition-all" 
              onClick={handleGoogleSignup}
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Continue with Google
            </Button>
          </form>

          <p className="text-center text-gray-400 text-sm">
            Already have an account?{" "}
            <NavLink to="/login" className="text-orange-500 font-bold hover:text-orange-400 transition-colors">
              Sign In
            </NavLink>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
