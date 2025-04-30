"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { getProductsByCategory } from "@/lib/products"

export default function FeaturedCollection() {
  const dresses = getProductsByCategory("dresses").slice(0, 2)

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-light tracking-wide mb-4">FEATURED COLLECTION</h2>
          <div className="w-20 h-px bg-black mb-4"></div>
          <p className="max-w-2xl text-neutral-600">
            Our curated selection of timeless pieces designed for the modern woman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dresses.map((dress) => (
            <Link href={`/products/${dress.slug}`} key={dress.id} className="block group relative overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative h-[600px] w-full"
              >
                <Image
                  src={dress.images[0] || "/placeholder.svg"}
                  alt={dress.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-black/20">
                  <h3 className="text-2xl font-light tracking-wide mb-4">{dress.name}</h3>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition-colors"
                  >
                    SHOP NOW
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
