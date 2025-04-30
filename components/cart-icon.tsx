import Image from "next/image"
import { useCart } from "@/lib/cart-context"

export default function CartIcon() {
  const { cartItems } = useCart()
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <div className="relative">
      <Image src="/images/cart-icon.png" alt="Cart" width={28} height={28} />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </div>
  )
}
