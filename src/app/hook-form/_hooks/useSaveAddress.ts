"use client";
//* Libraries imports
import { useMutation } from "@tanstack/react-query";
import z from "zod";

//* Local imports
import { Address } from "@/schemas/address";

const responseSchema = z.object({
  message: z.string(),
});

async function saveAddress(address: Address) {
  const response = await fetch("/api/address", {
    method: "POST",
    body: JSON.stringify(address),
  });

  if (!response.ok) {
    throw new Error("An error occurred while saving the address");
  }

  const data = await response.json();
  return responseSchema.parse(data);
}

export function useSaveAddress() {
  return useMutation({
    mutationFn: saveAddress,
  });
}
