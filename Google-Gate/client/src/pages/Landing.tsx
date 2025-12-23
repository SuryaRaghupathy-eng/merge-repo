import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

function GoogleIcon() {
  return (
    <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        className="text-[#4285F4]"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        className="text-[#34A853]"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        className="text-[#FBBC05]"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        className="text-[#EA4335]"
      />
    </svg>
  );
}

export default function Landing() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      </div>
    );
  }

  if (user) {
    return <Redirect to="/" />;
  }

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div className="min-h-screen bg-[#FDFEFE] overflow-hidden relative selection:bg-primary/20 flex flex-col">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-indigo-500/5 blur-[100px]" />
        <div className="absolute top-[40%] -left-[10%] w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 px-4 sm:px-6 py-8 sm:py-12 lg:py-0 max-w-7xl mx-auto w-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 max-w-2xl space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium border border-primary/20">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2 fill-primary" />
            Local SEO Intelligence
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.2] sm:leading-[1.1]">
            Track your local rankings <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              across all markets.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed">
            Monitor your local search visibility in multiple locations at once. See where you rank and identify opportunities for growth.
          </p>

          <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
            {[
              "Multi-location ranking tracking",
              "Organic SERP data included",
              "Built for local SEO professionals"
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Auth Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full sm:max-w-sm lg:w-auto lg:max-w-none"
        >
          <Card className="w-full border-slate-200/60 shadow-2xl shadow-indigo-500/10">
            <CardHeader className="space-y-2 sm:space-y-3 pb-6 sm:pb-8 text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 text-indigo-600">
                <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Create Account</CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Get started in seconds
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 px-4 sm:px-6">
              <div className="grid gap-2">
                <Button 
                  variant="google" 
                  onClick={handleLogin}
                  className="w-full group hover:shadow-md transition-all duration-300 text-sm sm:text-base py-5 sm:py-6"
                  data-testid="button-google-signin"
                >
                  <GoogleIcon />
                  <span className="group-hover:text-slate-900 transition-colors">Sign up with Google</span>
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-slate-400">
                    By SEO agencies and professionals
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col gap-3 sm:gap-4 text-center pb-6 sm:pb-8 px-4 sm:px-6">
              <p className="text-xs text-slate-400 leading-relaxed">
                By clicking continue, you agree to our <a href="#" className="underline hover:text-indigo-500">Terms of Service</a> and <a href="#" className="underline hover:text-indigo-500">Privacy Policy</a>.
              </p>
            </CardFooter>
          </Card>
        </motion.div>

      </div>
    </div>
  );
}
