"use client"

import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"
import type { Product } from "@/lib/types"

interface SearchResultItemProps {
  product: Product
  onSelect: () => void
}

export default function SearchResultItem({ product, onSelect }: SearchResultItemProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-md transition-colors"
      onClick={onSelect}
    >
      <div className="relative w-16 h-20 bg-neutral-100 flex-shrink-0">
        <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <div>
        <h4 className="font-medium">{product.name}</h4>
        <p className="text-sm text-neutral-500">{formatPrice(product.price)}</p>
        <p className="text-xs text-neutral-400 capitalize">{product.category}</p>
      </div>
    </Link>
  )
}
