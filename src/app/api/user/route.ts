export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const user = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    image: "https://picsum.photos/200/300",
  };

  // const user = "banana";

  await fakeDelay(5000);

  return Response.json(user);
}

async function fakeDelay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
