"use client";
//* Libraries imports
import { useAtom } from "jotai/react";

//* Components imports
import { Button } from "@/components/ui/button";

//* Atoms imports
import { counterAtom } from "../_atoms";

export function Counter() {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col w-full justify-center items-center'>
        <span className='text-5xl font-bold'>{count}</span>
      </div>
      <div className='flex flex-row gap-2'>
        <Button
          aria-label="Increment value"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => setCount((c) => c - 1)}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}