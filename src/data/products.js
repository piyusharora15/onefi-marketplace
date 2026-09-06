export const products = [
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    category: "Mobiles",
    description:
      "The latest iPhone Pro with powerful performance, an advanced camera system and a premium titanium design.",

    images: [
      "https://unsplash.com/photos/two-iphones-side-by-side-on-a-gray-background-lDWTfYhZ85w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    ],

    variants: [
      {
        id: "iphone-17-pro-256-deep-blue",
        name: "256 GB",
        color: "Deep Blue",
        price: 134900,
      },
      {
        id: "iphone-17-pro-512-deep-blue",
        name: "512 GB",
        color: "Deep Blue",
        price: 154900,
      },
      {
        id: "iphone-17-pro-1tb-deep-blue",
        name: "1 TB",
        color: "Deep Blue",
        price: 174900,
      },
    ],

    features: [
      "Pro performance",
      "Advanced camera system",
      "All-day battery life",
      "Premium design",
    ],

    emiPlans: [
      {
        id: "iphone-3",
        tenure: 3,
        interestRate: 0,
      },
      {
        id: "iphone-6",
        tenure: 6,
        interestRate: 0,
      },
      {
        id: "iphone-12",
        tenure: 12,
        interestRate: 0,
      },
      {
        id: "iphone-24",
        tenure: 24,
        interestRate: 0,
      },
      {
        id: "iphone-36",
        tenure: 36,
        interestRate: 0,
      },
    ],
  },

  {
    id: "macbook-air-m4",
    name: "MacBook Air M4",
    brand: "Apple",
    category: "Laptops",
    description:
      "A thin and powerful laptop designed for everyday productivity, development and creative work.",

    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    ],

    variants: [
      {
        id: "macbook-air-256",
        name: "256 GB",
        color: "Midnight",
        price: 99900,
      },
      {
        id: "macbook-air-512",
        name: "512 GB",
        color: "Midnight",
        price: 119900,
      },
    ],

    features: [
      "Apple M4 chip",
      "Liquid Retina display",
      "Long battery life",
      "Lightweight design",
    ],

    emiPlans: [
      {
        id: "mac-3",
        tenure: 3,
        interestRate: 0,
      },
      {
        id: "mac-6",
        tenure: 6,
        interestRate: 0,
      },
      {
        id: "mac-12",
        tenure: 12,
        interestRate: 0,
      },
      {
        id: "mac-24",
        tenure: 24,
        interestRate: 0,
      },
    ],
  },

  {
    id: "samsung-galaxy-s25-ultra",
    name: "Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Mobiles",
    description:
      "A flagship smartphone combining a large display, powerful performance and an advanced camera system.",

    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=900&q=80",
    ],

    variants: [
      {
        id: "s25-256",
        name: "256 GB",
        color: "Titanium Gray",
        price: 129999,
      },
      {
        id: "s25-512",
        name: "512 GB",
        color: "Titanium Gray",
        price: 139999,
      },
    ],

    features: [
      "Large AMOLED display",
      "Advanced camera",
      "High-performance processor",
      "All-day battery",
    ],

    emiPlans: [
      {
        id: "s25-3",
        tenure: 3,
        interestRate: 0,
      },
      {
        id: "s25-6",
        tenure: 6,
        interestRate: 0,
      },
      {
        id: "s25-12",
        tenure: 12,
        interestRate: 0,
      },
      {
        id: "s25-24",
        tenure: 24,
        interestRate: 0,
      },
    ],
  },

  {
    id: "sony-wh1000xm6",
    name: "Sony WH-1000XM6",
    brand: "Sony",
    category: "Electronics",
    description:
      "Premium wireless headphones with immersive sound and advanced noise cancellation.",

    images: [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
    ],

    variants: [
      {
        id: "sony-black",
        name: "Standard",
        color: "Black",
        price: 39990,
      },
    ],

    features: [
      "Active noise cancellation",
      "High-quality audio",
      "Wireless connectivity",
      "Comfortable fit",
    ],

    emiPlans: [
      {
        id: "sony-3",
        tenure: 3,
        interestRate: 0,
      },
      {
        id: "sony-6",
        tenure: 6,
        interestRate: 0,
      },
      {
        id: "sony-12",
        tenure: 12,
        interestRate: 0,
      },
    ],
  },

  {
    id: "ipad-air-m3",
    name: "iPad Air M3",
    brand: "Apple",
    category: "Electronics",
    description:
      "A versatile tablet for entertainment, productivity, creativity and everyday tasks.",

    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80",
    ],

    variants: [
      {
        id: "ipad-air-128",
        name: "128 GB",
        color: "Blue",
        price: 69900,
      },
      {
        id: "ipad-air-256",
        name: "256 GB",
        color: "Blue",
        price: 79900,
      },
    ],

    features: [
      "Apple M3 chip",
      "Liquid Retina display",
      "Apple Pencil support",
      "All-day battery",
    ],

    emiPlans: [
      {
        id: "ipad-3",
        tenure: 3,
        interestRate: 0,
      },
      {
        id: "ipad-6",
        tenure: 6,
        interestRate: 0,
      },
      {
        id: "ipad-12",
        tenure: 12,
        interestRate: 0,
      },
    ],
  },

  {
    id: "dyson-v12-detect",
    name: "Dyson V12 Detect Slim",
    brand: "Dyson",
    category: "Electronics",
    description:
      "A lightweight cordless vacuum designed for powerful everyday cleaning.",

    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=80",
    ],

    variants: [
      {
        id: "dyson-standard",
        name: "Standard",
        color: "Gold",
        price: 54900,
      },
    ],

    features: [
      "Cordless design",
      "Powerful suction",
      "Lightweight body",
      "Advanced filtration",
    ],

    emiPlans: [
      {
        id: "dyson-3",
        tenure: 3,
        interestRate: 0,
      },
      {
        id: "dyson-6",
        tenure: 6,
        interestRate: 0,
      },
      {
        id: "dyson-12",
        tenure: 12,
        interestRate: 0,
      },
    ],
  },
];
