"use client";
import { useQuery } from "@tanstack/react-query";

import { UserSkeleton } from "./UserSkeleton";

async function getUser(id: string) {
  const response = await fetch(`http://localhost:3000/user/${id}`, {
    next: {
      // revalidate: 0,
      tags: ["user"],
    },
    // cache: "no-store"
  });
  const data = await response.json();
  return data;
}

function useUser(id: string) {
  return useQuery({
    queryKey: ["userClient", id],
    queryFn: () => getUser(id),
    staleTime: 1000 * 5, // 5 seconds
  });
}

export function ClientUser() {
  const user = useUser("1");

  if (user.isLoading) {
    return <UserSkeleton />;
  }

  return (
    <div className="w-96 flex flex-col justify-center items-center">
      <p>Client Side Rendering</p>
      <pre>
        {JSON.stringify(user.data, null, 2)}
      </pre>
    </div>
  );
}