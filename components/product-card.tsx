"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/types"
import { useCart } from "@/lib/cart-context"
import { toast } from "@/components/ui/use-toast"
import { formatPrice } from "@/lib/utils"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    // Add with default size and color
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0],
    })

    toast({
      title: "Added to cart",
      description: `${product.name} (${product.colors[0]}, ${product.sizes[0]})`,
    })
  }

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    })
  }

  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }} className="group">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden mb-4">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.isNew && <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1">NEW</div>}

          <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-3 px-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-between">
            <motion.button
              className="flex-1 text-xs flex items-center justify-center gap-1 hover:text-neutral-500 transition-colors"
              onClick={handleQuickAdd}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Quick Add
            </motion.button>
            <motion.button
              className="ml-2 hover:text-neutral-500 transition-colors"
              onClick={handleWishlist}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
        <h3 className="font-light text-sm tracking-wide">{product.name}</h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm font-medium">{formatPrice(product.price)}</p>
          {product.rating && (
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">★</span>
              <span className="text-xs">{product.rating}</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  )
}
