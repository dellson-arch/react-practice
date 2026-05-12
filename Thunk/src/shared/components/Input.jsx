import React from "react";
import { AlertCircle } from "lucide-react";
const Input = ({ name, rules, label, error, register, ...props }) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        {...register(name, rules)}
        {...props}
        type="text"
        placeholder="Enter your full name"
        className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
      />
      {error && (
        <p className="flex items-center gap-1 text-red-500 text-xs mt-1">
          <AlertCircle size={12} /> {error.message}
        </p>
      )}
    </div>
  );
};

export default Input;
