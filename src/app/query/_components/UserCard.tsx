"use client";
//* Libraries imports

//* Components imports
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

//* Hooks imports
import { useUser } from "../_hooks";

export function UserCard() {
  const user = useUser("1");

  if (user.isLoading) return <UserSkeleton />;

  if (user.isError || !user.data) return <UserError />;

  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 h-16">
      <Avatar>
        <AvatarImage className="w-16 h-16" src={user.data.image} alt={user.data.name} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col w-full gap-2">
        <h2>{user.data.name}</h2>
        <p className="text-neutral-400">{user.data.email}</p>
      </div>
    </div>
  );
}

function UserSkeleton() {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 h-16">
      <Skeleton className="w-16 h-16 rounded-full min-h-16 max-h-16 min-w-16 max-w-16" />
      <div className="flex flex-col w-full gap-2 h-10">
        <Skeleton className="w-32 h-6" />
        <Skeleton className="w-24 h-4" />
      </div>
    </div>
  );
}

function UserError() {
  return (
    <div className="w-full flex flex-row items-center justify-center gap-4 h-16">
      <p className="text-neutral-400">Error fetching user</p>
    </div>
  );
}