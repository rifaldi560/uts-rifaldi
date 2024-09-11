"use client";

import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  icon,
  className,
}) => {
  return (
    <div className={`relative ${className}`}>
      <label htmlFor={label} className="sr-only">
        {label}
      </label>

      <input
        type="email"
        id={label}
        placeholder={placeholder}
        className="block w-full rounded px-3 py-3 text-sm font-light shadow focus:outline-none mobile:w-auto"
      />

      {icon && (
        <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
