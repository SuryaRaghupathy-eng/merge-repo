import { useState } from "react";
import { useCreateTodo } from "@/hooks/use-todos";
import { Button } from "@/components/ui/button";
import { Plus, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CreateTodo() {
  const [content, setContent] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { mutate, isPending } = useCreateTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    
    mutate({ content, completed: false }, {
      onSuccess: () => setContent("")
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-10">
      <form onSubmit={handleSubmit} className="relative group">
        <div 
          className={`
            absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary to-purple-600 opacity-20 blur transition duration-500
            ${isFocused ? "opacity-70" : "group-hover:opacity-40"}
          `}
        ></div>
        <div className="relative flex items-center bg-white rounded-xl shadow-sm">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="What needs to be done?"
            className="w-full py-4 pl-6 pr-20 text-lg bg-transparent border-none rounded-xl focus:ring-0 placeholder:text-slate-400 text-slate-700"
          />
          <div className="absolute right-2">
            <Button 
              size="icon" 
              type="submit" 
              disabled={!content.trim() || isPending}
              className={`
                transition-all duration-300
                ${content.trim() ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
            >
              {isPending ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Plus className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
