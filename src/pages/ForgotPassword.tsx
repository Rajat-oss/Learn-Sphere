import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/contexts/AuthContext";
import { GraduationCap, Mail, ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setSent(true);
    } catch (error) {
      console.error("Password reset failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="text-center mb-8">
          <NavLink to="/" className="inline-flex items-center gap-3 mb-4 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="font-display text-2xl font-black text-[#0B1A2A]">
              Learn<span className="text-gradient">Sphere</span>
            </span>
          </NavLink>
          <h1 className="font-display text-3xl font-bold mb-2 text-[#0B1A2A]">Reset Password</h1>
          <p className="text-[#667085]">Enter your email to receive a reset link</p>
        </div>

        <Card className="p-8 bg-white shadow-soft">
          {sent ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#0B1A2A]">Check Your Email</h3>
              <p className="text-[#667085]">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <NavLink to="/login">
                <Button className="w-full bg-gradient-orange text-white rounded-full">
                  Back to Login
                </Button>
              </NavLink>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085] h-5 w-5" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-12"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-orange text-white font-semibold rounded-full hover:shadow-glow-orange hover:-translate-y-0.5 transition-all"
              >
                Send Reset Link
              </Button>

              <NavLink to="/login" className="flex items-center justify-center gap-2 text-[#667085] hover:text-[#0B1A2A] transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Back to Login
              </NavLink>
            </form>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
