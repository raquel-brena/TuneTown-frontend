import React, { forwardRef, useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...props }, ref) => {
  return (
    <div className="flex flex-col space-y-">
      <label className="text-sm font-light select-none">{label}</label>
      <input
        ref={ref}
        className="rounded-sm h-8 appearance-none bg-slate-200 relative
           px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] 
           sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] 
            bg-transparent ring-1 ring-white/30 placeholder:text-zinc-500 sm:text-sm/6 
            text-base/6
            block
            focus:ring-0 
            hover:ring-white/40
            after:inset-0 after:rounded-lg
           "
        {...props}
      />
    </div>
  );
});

export default Input;
