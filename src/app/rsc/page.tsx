
//* Components imports
import { Suspense } from "react";
import { Gradient } from "@/components/Wrapper/Gradient";

import { User, ClientUser, UserSkeleton } from "./_components";

export default function RSC() {
  return (
    <Gradient>
      <h1 className="text-4xl font-bold mb-4">RSC vs RCC</h1>
      <Suspense fallback={<UserSkeleton />}>
        <User />
      </Suspense>
      <ClientUser />
    </Gradient>
  );
}