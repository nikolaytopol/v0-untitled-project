"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"
import { getNewArrivals } from "@/lib/products"

export default function NewArrivals() {
  // Display only the first 4 products
  const newArrivals = getNewArrivals().slice(0, 4)

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-4">NEW ARRIVALS</h2>
          <div className="w-20 h-px bg-black mb-4"></div>
          <p className="max-w-2xl text-neutral-600">Discover our latest additions to elevate your wardrobe.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/collections/new-in">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-black px-6 py-2 flex items-center hover:bg-black hover:text-white transition-colors"
            >
              VIEW ALL NEW ARRIVALS
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}
