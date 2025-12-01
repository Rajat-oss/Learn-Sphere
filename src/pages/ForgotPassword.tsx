import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/contexts/AuthContext";
import { Mail, ArrowLeft, X } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch (error: any) {
      console.error("Password reset failed:", error);
      setError(error.message || "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm animate-in fade-in duration-300 min-h-screen">
      <Card className="relative w-full max-w-md bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] border border-orange-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-orange-500/20 backdrop-blur-xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        <NavLink to="/" className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all z-10">
          <X className="h-5 w-5" />
        </NavLink>

        <div className="p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6">
          {sent ? (
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-7 w-7 sm:h-8 sm:w-8 text-green-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white">Check Your Email</h3>
              <p className="text-sm sm:text-base text-gray-400">
                We've sent a password reset link to <strong className="text-white break-all">{email}</strong>
              </p>
              <NavLink to="/login">
                <Button className="w-full h-14 bg-gradient-to-r from-[#FF7A2B] to-[#FF9E4A] hover:from-[#FF9E4A] hover:to-[#FF7A2B] text-white font-bold rounded-xl hover:-translate-y-1 transition-all duration-300">
                  Back to Login
                </Button>
              </NavLink>
            </div>
          ) : (
            <>
              <div className="text-center space-y-1 sm:space-y-2">
                <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white">Reset Password</h1>
                <p className="text-sm sm:text-base text-gray-400">Enter your email to receive a reset link</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-orange-500 transition-colors" />
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="pl-12 h-14 bg-white/5 border border-white/20 text-white placeholder:text-gray-500 rounded-xl focus:border-orange-500 focus:ring-2 focus:ring-orange-500/40 focus:bg-white/10 transition-all"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-14 bg-gradient-to-r from-[#FF7A2B] to-[#FF9E4A] hover:from-[#FF9E4A] hover:to-[#FF7A2B] text-white font-bold rounded-xl hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>

                <NavLink to="/login" className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Login
                </NavLink>
              </form>
            </>
          )}
        </div>
      </Card>
    </div>
  );
};

export default ForgotPassword;
