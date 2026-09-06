import { ArrowLeft, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
          aria-label="Go back"
        >
          <ArrowLeft size={20} strokeWidth={2} />
        </button>

        <h1 className="text-base font-semibold text-[#17171c]">
          1Fi Marketplace
        </h1>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={20} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
