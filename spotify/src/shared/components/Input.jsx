import { AlertCircle } from "lucide-react";
import React from "react";

const Input = ({name , label,rules,error,register,...props}) => {
  return (
    <div>
      <label className="block text-zinc-400 text-sm mb-2">{label}</label>
      <div className="relative">
        <input
          {...register(name , rules)}
          {...props}
             className={`w-full bg-zinc-800/50 border ${
            error ? "border-red-500" : "border-zinc-700"
          } rounded-lg py-2.5 pl-10 pr-4 text-white focus:outline-none focus:border-green-500 transition-colors`}
        />
      </div>
      {error && (
        <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
          <AlertCircle size={12} /> {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
