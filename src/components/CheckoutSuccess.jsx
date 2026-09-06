import { CheckCircle2 } from "lucide-react";

function CheckoutSuccess({ product, plan, onDone }) {
  return (
    <div className="fixed inset-0 z-110 flex items-center justify-center bg-[#F8F8FA] p-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-7 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#F0EBFF] text-[#6C3BFF]">
          <CheckCircle2 size={34} strokeWidth={2} />
        </div>

        <h2 className="mt-5 text-xl font-bold text-[#17171c]">
          You're all set!
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Your selection for{" "}
          <span className="font-medium text-gray-700">{product.name}</span> has
          been recorded.
        </p>

        <div className="mt-5 rounded-2xl bg-[#F8F8FA] p-4">
          <p className="text-xs text-gray-400">Selected EMI</p>

          <p className="mt-1 text-lg font-bold text-[#6C3BFF]">
            {plan.tenure} months
          </p>
        </div>

        <button
          onClick={onDone}
          className="mt-6 h-12 w-full rounded-2xl bg-[#6C3BFF] text-sm font-semibold text-white transition hover:bg-[#5B2FE0]"
        >
          Back to Marketplace
        </button>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
