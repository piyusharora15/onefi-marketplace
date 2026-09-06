import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import VariantSelector from "../components/VariantSelector";
import EmiSelector from "../components/EmiSelector";
import PriceBreakdown from "../components/PriceBreakDown";
import ProductHighlights from "../components/ProductHighlights";
import TrustBanner from "../components/TrustBanner";
import CheckoutBar from "../components/CheckoutBar";
import ConfirmationModal from "../components/ConfirmationModal";
import CheckoutSuccess from "../components/CheckoutSuccess";

import { getProductById } from "../services/marketplaceService";

function ProductDetails() {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchProduct() {
      try {
        setLoading(true);
        setError(null);

        const data = await getProductById(productId);

        if (!data) {
          throw new Error("Product not found");
        }

        if (isMounted) {
          setProduct(data);

          // Select first variant by default
          setSelectedVariant(data.variants?.[0] || null);

          // Select first EMI plan by default
          setSelectedPlan(data.emiPlans?.[0] || null);
        }
      } catch (err) {
        console.error("Failed to load product:", err);

        if (isMounted) {
          setError("We couldn't find this product.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      isMounted = false;
    };
  }, [productId]);

  // -----------------------------
  // Loading State
  // -----------------------------

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F8FA]">
        <div className="mx-auto max-w-3xl p-4">
          {/* Header skeleton */}
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-200" />

          {/* Product image skeleton */}
          <div className="mt-5 aspect-square animate-pulse rounded-3xl bg-gray-200" />

          {/* Product info skeleton */}
          <div className="mt-5 space-y-3">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />

            <div className="h-6 w-56 animate-pulse rounded bg-gray-200" />

            <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Variant skeleton */}
          <div className="mt-6 space-y-3">
            <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

            <div className="h-12 w-full animate-pulse rounded-2xl bg-gray-200" />
          </div>

          {/* EMI skeleton */}
          <div className="mt-6 space-y-3">
            <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

            <div className="h-28 w-full animate-pulse rounded-3xl bg-gray-200" />
          </div>
        </div>
      </div>
    );
  }

  // -----------------------------
  // Error State
  // -----------------------------

  if (error || !product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8F8FA] px-5">
        <div className="w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F0ECFF]">
            <span className="text-xl">!</span>
          </div>

          <p className="mt-4 text-base font-semibold text-[#17172B]">
            Product unavailable
          </p>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {error || "Something went wrong while loading this product."}
          </p>

          <button
            type="button"
            onClick={() => navigate("/marketplace")}
            className="mt-6 w-full rounded-xl bg-[#6C3BFF] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5B2FE0]"
          >
            Back to Marketplace
          </button>
        </div>
      </div>
    );
  }

  // -----------------------------
  // Handlers
  // -----------------------------

  const handleBack = () => {
    navigate(-1);
  };

  const handleProceed = () => {
    if (!selectedVariant || !selectedPlan) {
      return;
    }

    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  const handleConfirmationContinue = () => {
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
  };

  const handleBackToMarketplace = () => {
    setShowSuccess(false);
    navigate("/marketplace");
  };

  return (
    <div className="min-h-screen bg-[#F8F8FA] pb-28">
      {/* =========================================
          Header
      ========================================== */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-3xl items-center px-4">
          <button
            type="button"
            onClick={handleBack}
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-gray-100 active:scale-95"
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>

          <h1 className="ml-3 text-base font-semibold text-[#17172B]">
            Product Details
          </h1>
        </div>
      </header>

      {/* =========================================
          Main Content
      ========================================== */}
      <main className="mx-auto max-w-3xl px-4">
        {/* Product Image */}
        <ProductGallery product={product} />

        {/* Product Name / Price / Basic Info */}
        <ProductInfo product={product} />

        {/* =========================================
            Variant Selection
        ========================================== */}
        {product.variants?.length > 0 && (
          <section className="mt-4">
            <VariantSelector
              variants={product.variants}
              selectedVariant={selectedVariant}
              onVariantChange={setSelectedVariant}
            />
          </section>
        )}

        {/* =========================================
            EMI Selection
        ========================================== */}
        {product.emiPlans?.length > 0 && (
          <section className="mt-4 rounded-3xl bg-white p-5">
            <EmiSelector
              plans={product.emiPlans}
              selectedPlan={selectedPlan}
              onPlanChange={setSelectedPlan}
              principal={selectedVariant?.price || product.price || 0}
            />
          </section>
        )}

        {/* =========================================
            Price Breakdown
        ========================================== */}
        {selectedVariant && selectedPlan && (
          <section className="mt-4 rounded-3xl bg-white p-5">
            <PriceBreakdown
              price={selectedVariant.price}
              tenure={selectedPlan.tenure}
              interestRate={selectedPlan.interestRate}
            />
          </section>
        )}

        {/* =========================================
            Product Highlights
        ========================================== */}
        {product.features?.length > 0 && (
          <section className="mt-4">
            <ProductHighlights features={product.features} />
          </section>
        )}

        {/* =========================================
            Trust Banner
        ========================================== */}
        <section className="mt-4">
          <TrustBanner />
        </section>
      </main>

      {/* =========================================
          Fixed Checkout Bar
      ========================================== */}
      {selectedVariant && selectedPlan && (
        <CheckoutBar
          price={selectedVariant.price}
          plan={selectedPlan}
          onProceed={handleProceed}
        />
      )}

      {/* =========================================
          Confirmation Modal
      ========================================== */}
      {showConfirmation && selectedVariant && selectedPlan && (
        <ConfirmationModal
          product={product}
          variant={selectedVariant}
          plan={selectedPlan}
          onClose={handleConfirmationClose}
          onContinue={handleConfirmationContinue}
        />
      )}

      {/* =========================================
          Checkout Success
      ========================================== */}
      {showSuccess && selectedVariant && selectedPlan && (
        <CheckoutSuccess
          product={product}
          variant={selectedVariant}
          plan={selectedPlan}
          onClose={handleSuccessClose}
          onBackToMarketplace={handleBackToMarketplace}
        />
      )}
    </div>
  );
}

export default ProductDetails;
