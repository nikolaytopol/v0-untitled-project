import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide">SHOP</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/collections/new-in" className="text-sm text-neutral-600 hover:text-black">
                New In
              </Link>
              <Link href="/collections/dresses" className="text-sm text-neutral-600 hover:text-black">
                Dresses
              </Link>
              <Link href="/collections/tops" className="text-sm text-neutral-600 hover:text-black">
                Tops
              </Link>
              <Link href="/collections/bottoms" className="text-sm text-neutral-600 hover:text-black">
                Bottoms
              </Link>
              <Link href="/collections/accessories" className="text-sm text-neutral-600 hover:text-black">
                Accessories
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide">INFORMATION</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-sm text-neutral-600 hover:text-black">
                About Us
              </Link>
              <Link href="/sustainability" className="text-sm text-neutral-600 hover:text-black">
                Sustainability
              </Link>
              <Link href="/shipping" className="text-sm text-neutral-600 hover:text-black">
                Shipping & Returns
              </Link>
              <Link href="/terms" className="text-sm text-neutral-600 hover:text-black">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-neutral-600 hover:text-black">
                Privacy Policy
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide">CUSTOMER CARE</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/contact" className="text-sm text-neutral-600 hover:text-black">
                Contact Us
              </Link>
              <Link href="/faq" className="text-sm text-neutral-600 hover:text-black">
                FAQ
              </Link>
              <Link href="/size-guide" className="text-sm text-neutral-600 hover:text-black">
                Size Guide
              </Link>
              <Link href="/track-order" className="text-sm text-neutral-600 hover:text-black">
                Track Order
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-light tracking-wide">CONNECT</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </div>
            <p className="text-sm text-neutral-600">Email: contact@elegance.com</p>
            <p className="text-sm text-neutral-600">Phone: +1 (234) 567-8900</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Elegance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
