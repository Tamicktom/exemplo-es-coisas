"use client";
//* Libraries imports
import { useQuery } from "@tanstack/react-query";
import z from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  image: z.string().url(),
});

async function fetchUser() {
  const res = await fetch("/api/user");
  const data = await res.json();
  const validatedData = userSchema.parse(data);
  return validatedData;
}

export function useUser(id: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 0,
  });
}
