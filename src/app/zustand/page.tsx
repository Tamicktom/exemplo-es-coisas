
//* Components imports
import { Counter } from './_components'

export default function Zustend() {
  return (
    <div className="w-full min-h-svh h-full flex justify-center items-center flex-col p-8 bg-gradient-to-br from-emerald-500 to-violet-600">
      <div className="p-4 transition-all rounded-lg border border-neutral-300 hover:shadow-2xl flex flex-col justify-center items-center gap-4 bg-slate-50 max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Zustand</h1>
        <Counter />
      </div>
    </div>
  );
}