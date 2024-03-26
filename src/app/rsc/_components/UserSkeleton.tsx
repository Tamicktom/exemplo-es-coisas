export function UserSkeleton() {
  return (
    <div className="w-96 flex flex-col">
      <div className="h-6 w-full bg-neutral-300 animate-pulse rounded-lg" />
      <div className="h-[120px] w-full bg-neutral-300 animate-pulse rounded-lg" />
    </div>
  );
}