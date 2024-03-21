"use client";

import { useAtom } from "jotai/react";

import { counterAtom } from "../_atoms";

export function Banana(){
  const [count, setCount] = useAtom(counterAtom);

  return(
    <div>
      {count}
    </div>
  );
}