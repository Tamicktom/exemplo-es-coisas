"use client";
//* Libraries imports
import { useStore } from "zustand";

//* Components imports
import { Button } from "@/components/ui/button";

//* Store imports
import { useCounterStore } from "../_store/counter";

export function Counter() {
  const counter = useStore(useCounterStore);

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col w-full justify-center items-center'>
        <span className='text-5xl font-bold'>{counter.count}</span>
      </div>
      <div className='flex flex-row gap-2'>
        <Button
          aria-label="Increment value"
          onClick={() => counter.increment()}
        >
          Increment
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => counter.decrement()}
        >
          Decrement
        </Button>
      </div>
    </div>
  )
}