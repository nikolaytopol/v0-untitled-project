"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

interface PromotionBannerProps {
  onClose: () => void
}

const promotions = [
  {
    id: 1,
    text: "FREE SHIPPING ON ALL ORDERS OVER $100",
    link: "/shipping",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    id: 2,
    text: "BUY MORE & SAVE MORE - ADD ANY 3+ PIECES TO CART, GET EXTRA 15% OFF WITH CODE: SPRING15",
    link: "/collections/new-in",
    bgColor: "bg-rose-100",
    textColor: "text-rose-900",
  },
  {
    id: 3,
    text: "WE COVER IMPORT DUTIES & TAXES FOR ALL ORDERS",
    link: "/shipping",
    bgColor: "bg-neutral-100",
    textColor: "text-neutral-900",
  },
]

export default function PromotionBanner({ onClose }: PromotionBannerProps) {
  const [currentPromotion, setCurrentPromotion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromotion((prev) => (prev + 1) % promotions.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const promotion = promotions[currentPromotion]

  return (
    <div className={`relative ${promotion.bgColor} ${promotion.textColor}`}>
      <div className="container py-2 px-4 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={promotion.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center text-sm font-medium"
          >
            {promotion.text}
          </motion.div>
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 text-current"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center space-x-1 pb-1">
        {promotions.map((_, index) => (
          <span
            key={index}
            className={`h-1 w-1 rounded-full ${index === currentPromotion ? "bg-current" : "bg-current/30"}`}
          />
        ))}
      </div>
    </div>
  )
}
