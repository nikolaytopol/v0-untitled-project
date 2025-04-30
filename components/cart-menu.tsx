"use client"
import Image from "next/image"
import Link from "next/link"
import { X, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

export default function CartMenu() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart()

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-xl font-medium">Your Cart</h2>
        </div>
        <Separator />
        <div className="flex-1 flex flex-col items-center justify-center py-12 space-y-4">
          <div className="bg-neutral-100 p-6 rounded-full">
            <ShoppingBag className="h-10 w-10 text-neutral-400" />
          </div>
          <h3 className="text-lg font-medium">Your cart is empty</h3>
          <p className="text-neutral-500 text-center max-w-xs">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Button asChild className="mt-4 rounded-full px-8 bg-black hover:bg-black/80">
            <Link href="/collections/new-in">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between py-4">
        <h2 className="text-xl font-medium">Your Cart</h2>
        <Button variant="ghost" size="sm" onClick={clearCart} className="text-neutral-500 hover:text-black">
          Clear All
        </Button>
      </div>
      <Separator />

      <div className="flex-1 overflow-y-auto py-4 max-h-[calc(100vh-250px)]">
        <AnimatePresence initial={false}>
          {cartItems.map((item) => (
            <motion.div
              key={`${item.id}-${item.size}-${item.color}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="flex gap-4 py-4 border-b"
            >
              <div className="relative w-20 h-24 bg-neutral-100 flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex justify-between">
                  <h3 className="font-medium truncate pr-2">{item.name}</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 text-neutral-400 hover:text-black -mt-1 -mr-1 flex-shrink-0"
                    onClick={() => removeFromCart(item.id, item.size, item.color)}
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Remove</span>
                  </Button>
                </div>
                <div className="text-sm text-neutral-500 mt-1">
                  {item.color}, Size {item.size}
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center border rounded">
                    <button
                      className="px-2 py-1 hover:bg-neutral-100 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity - 1, item.size, item.color)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-2 py-1">{item.quantity}</span>
                    <button
                      className="px-2 py-1 hover:bg-neutral-100 transition-colors"
                      onClick={() => updateQuantity(item.id, item.quantity + 1, item.size, item.color)}
                    >
                      +
                    </button>
                  </div>
                  <div className="font-medium">{formatPrice(item.price * item.quantity)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-auto pt-4 border-t">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatPrice(subtotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? "FREE" : formatPrice(shipping)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-medium text-lg">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>

        <Button className="w-full mt-6 rounded-full bg-black hover:bg-black/80">Checkout</Button>

        <Button variant="outline" asChild className="w-full mt-2 rounded-full">
          <Link href="/collections/new-in">Continue Shopping</Link>
        </Button>
      </div>
    </div>
  )
}
