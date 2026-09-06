# 1Fi Marketplace

A responsive **1Fi Marketplace** experience built as part of the 1Fi SDE Intern assignment.

The feature extends the existing 1Fi Shop experience with a marketplace where users can browse products, view product details, select product variants and EMI plans, review their selection, and proceed through a simulated 1Fi checkout flow.

---

## ✨ Features

### Marketplace

- Browse products available through 1Fi
- Search products by name, brand, or category
- Filter products by category
- Responsive product grid
- Product cards with pricing and relevant information
- Loading skeletons
- Error handling
- Empty search/filter state

### Product Details

- Product image gallery
- Product information and pricing
- Product variant selection
- EMI plan selection
- Dynamic monthly EMI calculation
- Price breakdown
- Product highlights
- Trust/information section

### Checkout Flow

- `Proceed with 1Fi` CTA
- Review selected product, variant, and EMI plan
- Confirmation step
- Checkout success state
- Navigation back to the Marketplace

---

## 🛠️ Tech Stack

- **React.js** — Component-based UI development
- **Vite** — Development server and build tooling
- **JavaScript (ES6+)** — Application logic
- **Tailwind CSS** — Responsive styling
- **React Router** — Client-side routing
- **Lucide React** — UI icons

---

## 🏗️ Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── BottomNav.jsx
│   ├── MarketplaceHero.jsx
│   ├── SearchBar.jsx
│   ├── CategoryTabs.jsx
│   ├── ProductCard.jsx
│   ├── ProductGrid.jsx
│   ├── EmiSelector.jsx
│   ├── PriceBreakdown.jsx
│   ├── ProductGallery.jsx
│   ├── ProductInfo.jsx
│   ├── VariantSelector.jsx
│   ├── ProductHighlights.jsx
│   ├── TrustBanner.jsx
│   ├── CheckoutBar.jsx
│   ├── ConfirmationModal.jsx
│   ├── CheckoutSuccess.jsx
│   └── HowItWorks.jsx
│
├── pages/
│   ├── Marketplace.jsx
│   └── ProductDetails.jsx
│
├── services/
│   └── marketplaceService.js
│
├── data/
│   └── products.js
│
├── hooks/
│   └── useProducts.js
│
├── utils/
│   ├── emiCalculator.js
│   └── formatCurrency.js
│
└── App.jsx
```

🔄 Architecture & Data Flow

The application follows a modular component-based architecture with a separation between UI, application logic, and data access.

UI Components
      ↓
Custom Hooks
      ↓
Service Layer
      ↓
Mock Data

For example:

Marketplace
     ↓
useProducts()
     ↓
marketplaceService.js
     ↓
products.js

Product data is not directly embedded inside UI components. Instead, it is retrieved through the service layer.

This makes the implementation easier to maintain and allows the mock data source to be replaced with a real backend API in the future.

💳 EMI Calculation

EMI calculation is handled separately from the UI through a reusable utility.

Selected Variant
       ↓
Product Price
       ↓
Selected EMI Plan
       ↓
EMI Calculator
       ↓
Monthly EMI
       ↓
Price Breakdown / Checkout

The monthly EMI is recalculated when the user changes the selected product variant or EMI tenure.

This keeps the calculation logic separate from presentation components and avoids hardcoding calculated EMI values directly into the UI.

🔌 Data & API Approach

The assignment did not provide a backend API or existing repository.

Therefore, product and EMI information is maintained using structured mock data and accessed through a dedicated service layer.

Example product structure:

{
  id: "iphone-17-pro",
  name: "iPhone 17 Pro",
  brand: "Apple",
  category: "Smartphones",
  variants: [...],
  emiPlans: [...],
  features: [...]
}

The service layer exposes functions such as:

getProducts()
getProductById(id)

This keeps the UI independent from the underlying data source and makes the implementation ready for integration with real APIs in the future.


🎨 Design & UX

The Marketplace was designed to remain visually consistent with the existing 1Fi Shop experience.

The implementation follows the existing design language through:

Purple primary accent
Light neutral backgrounds
Rounded cards and containers
Clear typography hierarchy
Mobile-friendly layouts
Consistent CTA treatment
Bottom navigation
Responsive product grids
Simple checkout interactions

The goal was to extend the existing Shop experience rather than redesign the 1Fi application.

📱 Responsive Design

The Marketplace is designed to work across:

Mobile
Tablet
Desktop

The product grid adapts based on viewport size:

Mobile
  ↓
2 columns

Tablet
  ↓
3 columns

Desktop
  ↓
4 columns

The product details and checkout experience also follow a mobile-first approach while adapting to larger screens.


⚡ UX States

The application includes dedicated states for common user scenarios.

Loading State

Skeleton placeholders are displayed while product data is being retrieved.

Error State

A user-friendly error state is displayed when product retrieval fails.

Empty Search State

When no products match the current search or category filter, the user receives a clear empty state with an option to clear the filters.

Product Not Found

If an invalid product ID is requested, the application displays a product-unavailable state with navigation back to the Marketplace.


🔄 User Flow
Shop
  │
  └── 1Fi Marketplace
          │
          ├── Search / Filter
          │
          └── Product Listing
                  │
                  ▼
             Product Details
                  │
          ┌───────┴────────┐
          │                │
       Variant          EMI Plan
          │                │
          └───────┬────────┘
                  ▼
          Dynamic EMI
             Calculation
                  │
                  ▼
        Proceed with 1Fi
                  │
                  ▼
        Review Selection
                  │
                  ▼
              Continue
                  │
                  ▼
         Checkout Success



🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js
npm
Installation

Clone the repository:

git clone <https://github.com/piyusharora15/onefi-marketplace>

Navigate to the project directory:

cd <PROJECT_FOLDER>

Install dependencies:

npm install

Start the development server:

npm run dev

Open the local URL displayed by Vite in your browser.


📦 Production Build

Create a production build:

npm run build

Preview the production build locally:

npm run preview



🧪 Engineering Considerations
Component Reusability

The UI is divided into reusable components such as:

ProductCard
ProductGrid
EmiSelector
VariantSelector
PriceBreakdown
ProductGallery
ConfirmationModal
CheckoutSuccess

This keeps individual components focused and makes the application easier to maintain.

State Management

React state is used for:

Search query
Active category
Selected product variant
Selected EMI plan
Loading state
Error state
Confirmation modal state
Checkout success state
Separation of Concerns

Data retrieval, business logic, and presentation are separated into different layers:

Pages
  ↓
Components
  ↓
Hooks
  ↓
Services
  ↓
Data

This structure helps prevent business logic and data access from becoming tightly coupled to UI components.


💡 Technology Stack Decision

The assignment did not provide an existing repository or prescribe a specific frontend framework.

Since the role requirements reference React/Next.js and the feature is primarily a responsive frontend experience, React with Vite was selected for the implementation.

The application was structured with reusable components and a separate data/service layer so that the Marketplace can later be integrated with an existing application and real APIs.



⚠️ Assumptions
Product and EMI information uses mock data because no backend API was provided.
The checkout flow is a simulated frontend experience and does not process real payments or loans.
The implementation focuses on the Marketplace feature and does not redesign unrelated parts of the 1Fi application.
Existing 1Fi Shop sections that were not required for implementation remain outside the Marketplace scope.



👨‍💻 Author

Piyush Arora

B.Tech in Information Technology

Full-Stack Developer


