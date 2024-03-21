//* Libraries imports
import z from "zod";

export const states = z.enum(
  [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ],
  {
    invalid_type_error: "Estado inválido",
    required_error: "Estado é obrigatório",
    description: "Estado",
  }
);

export type States = z.infer<typeof states>;

export const cepSchema = z
  .string({
    invalid_type_error: "CEP inválido mexerica",
    required_error: "CEP é obrigatório",
  })
  .min(9, {
    message: "CEP muito curto",
  })
  .max(9, {
    message: "CEP muito longo",
  })
  .regex(/^\d{5}-\d{3}$/, {
    message: "CEP inválido e banana",
  });

const numberSchema = z
  .string({
    invalid_type_error: "Número inválido",
    required_error: "Número é obrigatório",
  })
  .min(1, {
    message: "Número muito curto",
  })
  .max(4, {
    message: "Número muito longo",
  })
  .regex(/^\d+$/, {
    message: "Número inválido",
  })
  .transform((data) => {
    const removeNonDigits = data.replace(/\D/g, "");
    const removeExtraDigits = removeNonDigits.slice(0, 4);
    return removeExtraDigits;
  });

export const addressSchema = z.object({
  street: z.string({
    invalid_type_error: "Rua inválida",
    required_error: "Rua é obrigatória",
  }),
  neighborhood: z.string({
    invalid_type_error: "Bairro inválido",
    required_error: "Bairro é obrigatório",
  }),
  number: numberSchema,
  city: z.string({
    invalid_type_error: "Cidade inválida",
    required_error: "Cidade é obrigatória",
  }),
  state: states,
  zip: cepSchema,
});

export type Address = z.infer<typeof addressSchema>;
