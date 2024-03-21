//* Local imports
import { addressSchema } from "@/schemas/address";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const address = addressSchema.parse(body);

  await fakeDelay(5000);

  return Response.json({
    message: "Address saved",
  });
}

async function fakeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
