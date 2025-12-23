import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "wouter";
import { Button } from "@/components/ui/button";
import { CreateTodo } from "@/components/CreateTodo";
import { TodoList } from "@/components/TodoList";
import { LogOut, LayoutGrid, Calendar } from "lucide-react";

export default function Home() {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Redirect to="/landing" />;
  }

  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200">
              <LayoutGrid className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-slate-800">TaskFlow</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 pr-4 border-r border-slate-200">
              {user.profileImageUrl && (
                <img 
                  src={user.profileImageUrl} 
                  alt={user.firstName || "User"} 
                  className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm"
                />
              )}
              <span className="text-sm font-medium text-slate-700">
                {user.firstName || user.email}
              </span>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => logout()}
              className="text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2">
            <Calendar className="w-4 h-4" />
            <span>{currentDate}</span>
          </div>
          <h1 className="text-4xl font-display font-bold text-slate-900 mb-2">
            Good morning, {user.firstName || "Friend"}!
          </h1>
          <p className="text-slate-500 text-lg">
            You have things to do. Let's make it happen.
          </p>
        </div>

        {/* Todo App Area */}
        <div className="relative">
          <CreateTodo />
          <TodoList />
        </div>

      </main>
    </div>
  );
}
