

async function getUser() {
  const response = await fetch("http://localhost:3000/user", {
    next: {
      // revalidate: 60,
      tags: ["user"],
    },
    cache: "no-store"
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export async function User() {
  const user = await getUser();

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p>Server Side Rendering</p>
      <pre>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}