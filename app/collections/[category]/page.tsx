"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products"
import ShippingInfo from "@/components/shipping-info"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params

  // Format the category name for display
  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  // Filter products by category
  const categoryProducts =
    category === "new-in"
      ? getProductsByCategory("dresses").concat(getProductsByCategory("tops")).slice(0, 8)
      : getProductsByCategory(category.replace("-", ""))

  return (
    <div className="container py-12 px-4">
      <div className="flex flex-col items-center mb-12 text-center">
        <Button variant="ghost" asChild className="self-start mb-6">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-3xl font-light tracking-wide mb-4">{formattedCategory}</h1>
        <div className="w-20 h-px bg-black mb-4"></div>
        <p className="max-w-2xl text-neutral-600">
          {category === "new-in"
            ? "Discover our latest arrivals and elevate your wardrobe with fresh styles."
            : `Explore our collection of ${formattedCategory.toLowerCase()} designed for the modern woman.`}
        </p>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p>No products found in this category.</p>
        </div>
      )}

      {/* Shipping Information */}
      <div className="mt-16">
        <ShippingInfo />
      </div>
    </div>
  )
}
