import { Home, ShoppingBag, CreditCard, Wallet, User } from "lucide-react";

const navigationItems = [
  {
    label: "Home",
    icon: Home,
  },
  {
    label: "Shop",
    icon: ShoppingBag,
    active: true,
  },
  {
    label: "EMI Dues",
    icon: CreditCard,
  },
  {
    label: "Limit",
    icon: Wallet,
  },
  {
    label: "Profile",
    icon: User,
  },
];

function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-2xl items-center justify-around px-2 py-2">
        {navigationItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex min-w-15 flex-col items-center gap-1 rounded-xl px-3 py-1.5 transition ${active ? "text-[#6C3BFF]" : "text-gray-400 hover:text-gray-600"}`}
          >
            <Icon size={20} strokeWidth={active ? 2.3 : 2} />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}

export default BottomNav;
