//* Libraries imports
import z from "zod";

const viaCepSchema = z.object({
  cep: z.string(),
  logradouro: z.string(),
  complemento: z.string().nullable(),
  bairro: z.string(),
  localidade: z.string(),
  uf: z.string(),
  ibge: z.string(),
  gia: z.string(),
  ddd: z.string(),
  siafi: z.string(),
});

export async function getCep(cep: string) {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const data = await response.json();
  return viaCepSchema.parse(data);
}
