"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, Search, ShoppingBag, User, X, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import CartMenu from "@/components/cart-menu"
import { useCart } from "@/lib/cart-context"
import PromotionBanner from "@/components/promotion-banner"
import { products } from "@/lib/products"
import { formatPrice } from "@/lib/utils"

export default function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartItems } = useCart()
  const [isBannerVisible, setIsBannerVisible] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const filteredProducts = searchQuery
    ? products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : []

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <>
      {isBannerVisible && <PromotionBanner onClose={() => setIsBannerVisible(false)} />}

      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative overflow-hidden group">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Toggle menu</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-1/2 transition-all duration-300 transform -translate-x-1/2"></span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6 mt-10">
                  <Link href="/" className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors">
                    HOME
                  </Link>
                  <Link
                    href="/collections/new-in"
                    className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors"
                  >
                    NEW IN
                  </Link>
                  <Link
                    href="/collections/dresses"
                    className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors"
                  >
                    DRESSES
                  </Link>
                  <Link
                    href="/collections/tops"
                    className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors"
                  >
                    TOPS
                  </Link>
                  <Link
                    href="/collections/bottoms"
                    className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors"
                  >
                    BOTTOMS
                  </Link>
                  <Link
                    href="/about"
                    className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors"
                  >
                    ABOUT
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg font-light tracking-wide hover:text-neutral-500 transition-colors"
                  >
                    CONTACT
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-light tracking-wide relative group">
              HOME
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/collections/new-in" className="text-sm font-light tracking-wide relative group">
              NEW IN
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/collections/dresses" className="text-sm font-light tracking-wide relative group">
              DRESSES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/collections/tops" className="text-sm font-light tracking-wide relative group">
              TOPS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/collections/bottoms" className="text-sm font-light tracking-wide relative group">
              BOTTOMS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Logo (centered) */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-2xl font-light tracking-widest"
          >
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              ELEGANCE
            </motion.div>
          </Link>

          {/* Right Navigation Icons */}
          <div className="flex items-center gap-5">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                  <Globe className="h-6 w-6" />
                  <span className="sr-only">Select Language</span>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
                  <User className="h-6 w-6" />
                  <span className="sr-only">Account</span>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/account/login">Sign In</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/register">Register</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/orders">Orders</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Search */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </motion.div>

            {/* Cart */}
            <Sheet>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} className="cursor-pointer relative">
                  <ShoppingBag className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                  <span className="sr-only">Cart</span>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-[350px] sm:w-[450px]">
                <CartMenu />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 pt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="container max-w-4xl mx-auto px-4">
                <div className="flex items-center border-b border-neutral-200 pb-4">
                  <Search className="h-5 w-5 mr-2 text-neutral-400" />
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="flex-1 border-0 focus-visible:ring-0 text-lg"
                    autoFocus
                    onChange={(e) => setSearchQuery(e.target.value)}
                    value={searchQuery}
                  />
                  <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close search</span>
                  </Button>
                </div>

                <div className="py-8">
                  {searchQuery ? (
                    <>
                      <h3 className="text-lg font-medium mb-4">Search Results</h3>
                      {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                          {filteredProducts.map((product) => (
                            <Link
                              key={product.id}
                              href={`/products/${product.slug}`}
                              className="flex items-center gap-4 p-3 hover:bg-neutral-50 rounded-md transition-colors"
                              onClick={() => setIsSearchOpen(false)}
                            >
                              <div className="relative w-16 h-20 bg-neutral-100 flex-shrink-0">
                                <Image
                                  src={product.images[0] || "/placeholder.svg"}
                                  alt={product.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="text-sm text-neutral-500">{formatPrice(product.price)}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <p className="text-neutral-500">No products found matching "{searchQuery}"</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <h3 className="text-lg font-medium mb-4">Popular Searches</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Dresses", "Summer Collection", "Linen", "Tops", "New Arrivals"].map((term) => (
                          <Button
                            key={term}
                            variant="outline"
                            className="rounded-full"
                            onClick={() => setSearchQuery(term)}
                          >
                            {term}
                          </Button>
                        ))}
                      </div>

                      <h3 className="text-lg font-medium mt-8 mb-4">Popular Categories</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                          { name: "Dresses", image: "/placeholder.svg?height=400&width=300" },
                          { name: "Tops", image: "/placeholder.svg?height=400&width=300" },
                          { name: "Bottoms", image: "/placeholder.svg?height=400&width=300" },
                          { name: "Accessories", image: "/placeholder.svg?height=400&width=300" },
                        ].map((category) => (
                          <Link
                            key={category.name}
                            href={`/collections/${category.name.toLowerCase()}`}
                            className="group relative"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                              <Image
                                src={category.image || "/placeholder.svg"}
                                alt={category.name}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                <span className="text-white font-medium">{category.name}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
