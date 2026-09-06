import { Search, CreditCard, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose a product",
    description: "Browse products you want.",
  },
  {
    icon: CreditCard,
    title: "Pick your EMI",
    description: "Choose a suitable tenure.",
  },
  {
    icon: CheckCircle2,
    title: "Proceed with 1Fi",
    description: "Continue with your selected plan.",
  },
];

function HowItWorks() {
  return (
    <section className="px-4 pt-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-semibold">How it works</h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-white p-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F0EBFF] text-[#6C3BFF]">
                  <Icon size={17} />
                </div>

                <span className="text-xs font-semibold text-gray-300">
                  0{index + 1}
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold">{title}</p>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
