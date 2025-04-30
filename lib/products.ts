import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "Blue Lace Midi Dress",
    slug: "blue-lace-midi-dress",
    description:
      "A beautiful light blue lace midi dress with button details down the front and a belt at the waist. Features delicate short sleeves and a flattering silhouette perfect for special occasions.",
    price: 149.99,
    images: [
      "/images/blue-lace-dress.png",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "dresses",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Blue", "White", "Black"],
    material: "65% Cotton, 35% Polyester",
    care: ["Hand wash cold", "Do not bleach", "Hang to dry", "Iron on low heat if needed"],
    details: ["Button-down front", "Belted waist", "Short sleeves", "Midi length", "Lace overlay"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
      countries: ["United States", "Canada", "United Kingdom", "Australia", "European Union"],
    },
    promotion: {
      code: "SPRING15",
      discount: 15,
      description: "Add any 3+ pieces to cart, get extra 15% OFF. Apply the code at checkout.",
      minQuantity: 3,
    },
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: "2",
    name: "Silk Slip Dress",
    slug: "silk-slip-dress",
    description:
      "A luxurious silk slip dress perfect for any occasion. Features adjustable straps and a flattering silhouette.",
    price: 129.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "dresses",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Ivory", "Sage"],
    material: "100% Silk",
    care: ["Dry clean only", "Cool iron if needed", "Do not bleach"],
    details: ["Adjustable straps", "Midi length", "Bias cut", "Slight cowl neck"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
      countries: ["United States", "Canada", "United Kingdom", "Australia", "European Union"],
    },
    promotion: {
      code: "SPRING15",
      discount: 15,
      description: "Add any 3+ pieces to cart, get extra 15% OFF. Apply the code at checkout.",
      minQuantity: 3,
    },
    rating: 4.9,
    reviewCount: 87,
  },
  {
    id: "3",
    name: "Linen Blend Blazer",
    slug: "linen-blend-blazer",
    description: "A lightweight linen blend blazer perfect for summer. Features a relaxed fit and subtle texture.",
    price: 149.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "tops",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Beige", "Black", "Navy"],
    material: "55% Linen, 45% Cotton",
    care: ["Dry clean only", "Cool iron if needed", "Do not bleach"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
    },
    rating: 4.7,
    reviewCount: 56,
  },
  {
    id: "4",
    name: "High-Waisted Wide Leg Pants",
    slug: "high-waisted-wide-leg-pants",
    description: "Elegant high-waisted pants with a wide leg silhouette. Made from a comfortable, flowing fabric.",
    price: 89.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "bottoms",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Chocolate"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
    },
    rating: 4.6,
    reviewCount: 42,
  },
  {
    id: "5",
    name: "Oversized Cotton Shirt",
    slug: "oversized-cotton-shirt",
    description: "A versatile oversized cotton shirt perfect for layering or wearing on its own.",
    price: 69.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "tops",
    isNew: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Blue", "Striped"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
    },
    rating: 4.8,
    reviewCount: 78,
  },
  {
    id: "6",
    name: "Knit Midi Dress",
    slug: "knit-midi-dress",
    description: "A comfortable and elegant knit midi dress with a form-fitting silhouette.",
    price: 119.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "dresses",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Grey", "Black", "Camel"],
    material: "80% Viscose, 20% Nylon",
    care: ["Hand wash cold", "Lay flat to dry", "Do not bleach", "Do not iron"],
    details: ["Ribbed texture", "Midi length", "Form-fitting", "Stretchy material"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
      countries: ["United States", "Canada", "United Kingdom", "Australia", "European Union"],
    },
    promotion: {
      code: "SPRING15",
      discount: 15,
      description: "Add any 3+ pieces to cart, get extra 15% OFF. Apply the code at checkout.",
      minQuantity: 3,
    },
    rating: 4.7,
    reviewCount: 93,
  },
  {
    id: "7",
    name: "Pleated Midi Skirt",
    slug: "pleated-midi-skirt",
    description: "An elegant pleated midi skirt that moves beautifully with every step.",
    price: 79.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "bottoms",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Navy"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
    },
    rating: 4.5,
    reviewCount: 67,
  },
  {
    id: "8",
    name: "Cashmere Blend Sweater",
    slug: "cashmere-blend-sweater",
    description: "A luxuriously soft cashmere blend sweater with a relaxed fit.",
    price: 159.99,
    images: [
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=800&width=600",
    ],
    category: "tops",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Grey", "Black"],
    shipping: {
      freeShipping: true,
      estimatedDelivery: "3-5 business days",
      coversDuties: true,
      internationalShipping: true,
      returnPolicy: "30-day returns on unworn items",
    },
    rating: 4.9,
    reviewCount: 112,
  },
]

// Function to change product category
export function changeProductCategory(productId: string, newCategory: string) {
  const productIndex = products.findIndex((p) => p.id === productId)

  if (productIndex !== -1) {
    products[productIndex].category = newCategory
    return true
  }

  return false
}

// Function to get products by category
export function getProductsByCategory(category: string) {
  return products.filter((product) => product.category === category)
}

// Function to get new arrivals
export function getNewArrivals() {
  return products.filter((product) => product.isNew)
}

// Function to get product by slug
export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug)
}

// Function to search products
export function searchProducts(query: string) {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery),
  )
}

// Function to get addresses
export const addresses = [
  {
    id: "1",
    name: "John Doe",
    street: "123 Main St",
    city: "New York",
    state: "NY",
    postalCode: "10001",
    country: "United States",
    isDefault: true,
    promotionApplied: "FREE_SHIPPING",
  },
  {
    id: "2",
    name: "Jane Smith",
    street: "456 Park Ave",
    city: "Los Angeles",
    state: "CA",
    postalCode: "90001",
    country: "United States",
    isDefault: false,
    promotionApplied: "EXPEDITED_SHIPPING",
  },
]
