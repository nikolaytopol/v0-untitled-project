"use client"

import ShippingInfo from "@/components/shipping-info"
import FeaturedCollection from "@/components/featured-collection"
import NewArrivals from "@/components/new-arrivals"
import Newsletter from "@/components/newsletter"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh]">
        <Image src="/placeholder.svg?height=1080&width=1920" alt="Hero image" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-light tracking-wider mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            ELEGANT ESSENTIALS
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 max-w-md text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover our new collection of timeless pieces designed for the modern woman.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/collections/new-in"
              className="rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-white/90 transition-colors"
            >
              EXPLORE COLLECTION
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* Shipping Info */}
      <ShippingInfo />

      {/* New Arrivals */}
      <NewArrivals />

      {/* About Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[500px] w-full">
            <Image src="/placeholder.svg?height=1000&width=800" alt="About our brand" fill className="object-cover" />
          </div>
          <div className="space-y-6 px-4">
            <h2 className="text-3xl font-light tracking-wide">OUR STORY</h2>
            <p className="text-neutral-600">
              Founded with a passion for timeless elegance and sustainable fashion, our brand creates pieces that
              transcend seasons and trends. Each garment is thoughtfully designed with attention to detail and crafted
              from premium materials.
            </p>
            <p className="text-neutral-600">
              We believe in slow fashion and creating pieces that become treasured parts of your wardrobe for years to
              come.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a
                href="/about"
                className="rounded-full border border-black px-6 py-2 inline-block hover:bg-black hover:text-white transition-colors"
              >
                LEARN MORE
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  )
}
