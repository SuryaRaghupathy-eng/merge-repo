import { useTodos, useUpdateTodo, useDeleteTodo } from "@/hooks/use-todos";
import { Check, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Todo } from "@shared/schema";

function TodoItem({ todo }: { todo: Todo }) {
  const updateMutation = useUpdateTodo();
  const deleteMutation = useDeleteTodo();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="group flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all duration-300"
    >
      <button
        onClick={() => updateMutation.mutate({ id: todo.id, completed: !todo.completed })}
        disabled={updateMutation.isPending}
        className={`
          flex-shrink-0 w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center
          ${todo.completed 
            ? "bg-primary border-primary text-white" 
            : "border-slate-300 hover:border-primary text-transparent"}
        `}
      >
        <Check className="w-3.5 h-3.5 stroke-[3]" />
      </button>

      <span 
        className={`
          flex-grow text-lg transition-all duration-300
          ${todo.completed ? "text-slate-400 line-through decoration-slate-300" : "text-slate-700"}
        `}
      >
        {todo.content}
      </span>

      <button
        onClick={() => deleteMutation.mutate(todo.id)}
        className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all p-2 rounded-lg hover:bg-red-50"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </motion.div>
  );
}

export function TodoList() {
  const { data: todos, isLoading } = useTodos();

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mx-auto space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-white/50 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  if (!todos?.length) {
    return (
      <div className="text-center py-20 text-slate-400 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
        <p className="text-lg font-medium">No tasks yet</p>
        <p className="text-sm">Add one above to get started</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <AnimatePresence mode="popLayout">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </AnimatePresence>
    </div>
  );
}
