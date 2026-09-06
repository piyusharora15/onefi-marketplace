import { ShieldCheck } from "lucide-react";

function TrustBanner() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0EBFF]">
        <ShieldCheck size={19} className="text-[#6C3BFF]" />
      </div>

      <div>
        <p className="text-sm font-semibold">Pay securely with 1Fi</p>

        <p className="mt-0.5 text-xs text-gray-500">
          Choose an EMI plan and proceed securely.
        </p>
      </div>
    </div>
  );
}

export default TrustBanner;
