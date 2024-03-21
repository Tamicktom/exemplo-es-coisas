"use client";
import { forwardRef, type InputHTMLAttributes } from "react";

import { Input } from "../ui/input";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = forwardRef<HTMLInputElement, Props>((props, ref) => {

  return (
    <div className='flex flex-col w-full'>
      <label className='pb-1 text-base font-bold text-black' htmlFor={props.id}>
        {props.label}
      </label>
      <div>
        <Input
          placeholder={props.label}
          type="text"
          ref={ref}
          {...props}
        />
      </div>
      <div>
        {props.error && (
          <span className='text-red-500 text-xs'>
            {props.error}
          </span>
        )}
      </div>
    </div>
  );
}
)