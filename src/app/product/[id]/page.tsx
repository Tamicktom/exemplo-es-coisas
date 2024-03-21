
import * as Form from "@/components/Forms";

type Props = {
  params: {
    id: string;
  };
  searchParams: {}
}

export default function ProductPage(props: Props) {


  return (
    <div className="w-full min-h-svh h-full flex justify-center items-center flex-col p-8 bg-gradient-to-br from-emerald-500 to-violet-600">
      <div className="p-4 transition-all rounded-lg border border-neutral-300 hover:shadow-2xl flex flex-col justify-center items-center gap-4 bg-slate-50 max-w-lg">
        <h1 className="text-5xl font-bold">
          {props.params.id}
        </h1>
        <pre>
          {JSON.stringify(props.searchParams, null, 2)}
        </pre>
        <Form.FiscalData />
      </div>
    </div>
  );
}