"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Heart, Minus, Plus, Share, Star, Truck, Package, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getProductBySlug } from "@/lib/products"
import { toast } from "@/components/ui/use-toast"
import { useCart } from "@/lib/cart-context"
import { formatPrice } from "@/lib/utils"

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params

  // Find the product by slug
  const product = getProductBySlug(slug)

  const [selectedSize, setSelectedSize] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [activeTab, setActiveTab] = useState("description")
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="container py-12 px-4 text-center">
        <p>Product not found.</p>
        <Button asChild variant="outline" className="mt-4">
          <Link href="/collections/new-in">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to shop
          </Link>
        </Button>
      </div>
    )
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive",
      })
      return
    }

    if (!selectedColor) {
      toast({
        title: "Please select a color",
        variant: "destructive",
      })
      return
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} (${selectedColor}, ${selectedSize})`,
    })
  }

  const addToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist`,
    })
  }

  // Render rating stars
  const renderRatingStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${i <= rating ? "fill-yellow-400 text-yellow-400" : "fill-neutral-200 text-neutral-200"}`}
        />,
      )
    }
    return stars
  }

  return (
    <div className="container py-12 px-4">
      <Button variant="ghost" asChild className="mb-6 group relative overflow-hidden">
        <Link href="/collections/new-in">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to shop
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
        </Link>
      </Button>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
            />
          </motion.div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {product.images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-24 flex-shrink-0 border-2 transition-all duration-300 ${
                  selectedImage === index ? "border-black" : "border-transparent hover:border-neutral-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h1 className="text-3xl font-light tracking-wide">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              {product.rating && (
                <>
                  <div className="flex">{renderRatingStars(product.rating)}</div>
                  <span className="text-sm text-neutral-500">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </>
              )}
            </div>
            <p className="text-xl mt-2 font-medium">{formatPrice(product.price)}</p>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="color">Color</Label>
              <RadioGroup
                id="color"
                value={selectedColor}
                onValueChange={setSelectedColor}
                className="flex flex-wrap gap-2"
              >
                {product.colors.map((color) => (
                  <div key={color} className="flex items-center space-x-2">
                    <RadioGroupItem value={color} id={`color-${color}`} />
                    <Label htmlFor={`color-${color}`}>{color}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <RadioGroup
                id="size"
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem value={size} id={`size-${size}`} />
                    <Label htmlFor={`size-${size}`}>{size}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label>Quantity</Label>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="rounded-r-none transition-all duration-300 hover:bg-neutral-100"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <div className="w-12 h-10 flex items-center justify-center border-y">{quantity}</div>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={incrementQuantity}
                  className="rounded-l-none transition-all duration-300 hover:bg-neutral-100"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={handleAddToCart}
              className="flex-1 rounded-full bg-black text-white py-2 px-4 font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              ADD TO CART
            </motion.button>
            <motion.button
              onClick={addToWishlist}
              className="rounded-full border border-black py-2 px-4 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Heart className="mr-2 h-4 w-4" />
              WISHLIST
            </motion.button>
          </div>

          {/* Shipping Information */}
          {product.shipping && (
            <div className="bg-neutral-50 p-4 rounded-md">
              <h3 className="font-medium mb-3">Shipping Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-neutral-700" />
                  <div>
                    <p className="text-sm font-medium mb-0">
                      {product.shipping.freeShipping ? "Free Shipping" : "Standard Shipping"}
                    </p>
                    <p className="text-xs text-neutral-500 mb-0">
                      Estimated delivery: {product.shipping.estimatedDelivery}
                    </p>
                  </div>
                </div>
                {product.shipping.coversDuties && (
                  <div className="flex items-center gap-3">
                    <Package className="h-5 w-5 text-neutral-700" />
                    <p className="text-sm mb-0">Elegance covers import duties & taxes for all orders.</p>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <RefreshCw className="h-5 w-5 text-neutral-700" />
                  <p className="text-sm mb-0">{product.shipping.returnPolicy}</p>
                </div>
              </div>
            </div>
          )}

          {/* Promotion */}
          {product.promotion && (
            <div className="bg-blue-50 p-4 rounded-md text-center">
              <h3 className="font-medium mb-2">BUY MORE & SAVE MORE</h3>
              <p className="text-sm mb-2">{product.promotion.description}</p>
              <p className="font-bold">Code: {product.promotion.code}</p>
            </div>
          )}

          <Separator />

          {/* Product Information Tabs */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="description" className="border-b">
              <AccordionTrigger className="text-base font-medium">Description</AccordionTrigger>
              <AccordionContent>
                <p className="text-neutral-600 leading-relaxed">{product.description}</p>
                {product.details && (
                  <ul className="list-disc pl-5 mt-3 space-y-1">
                    {product.details.map((detail, index) => (
                      <li key={index} className="text-neutral-600">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
              </AccordionContent>
            </AccordionItem>

            {product.material && (
              <AccordionItem value="materials" className="border-b">
                <AccordionTrigger className="text-base font-medium">Materials & Care</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium mb-2">Material</p>
                  <p className="text-neutral-600 mb-4">{product.material}</p>

                  {product.care && (
                    <>
                      <p className="font-medium mb-2">Care Instructions</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {product.care.map((instruction, index) => (
                          <li key={index} className="text-neutral-600">
                            {instruction}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </AccordionContent>
              </AccordionItem>
            )}

            {product.shipping && (
              <AccordionItem value="shipping" className="border-b">
                <AccordionTrigger className="text-base font-medium">Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  <p className="font-medium mb-2">Shipping</p>
                  <p className="text-neutral-600 mb-2">
                    {product.shipping.freeShipping
                      ? "Free standard shipping on all orders."
                      : "Standard shipping rates apply."}
                  </p>
                  <p className="text-neutral-600 mb-4">Estimated delivery: {product.shipping.estimatedDelivery}</p>

                  {product.shipping.countries && (
                    <>
                      <p className="font-medium mb-2">Available Shipping Countries</p>
                      <ul className="list-disc pl-5 space-y-1">
                        {product.shipping.countries.map((country, index) => (
                          <li key={index} className="text-neutral-600">
                            {country}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <p className="font-medium mt-4 mb-2">Returns</p>
                  <p className="text-neutral-600">{product.shipping.returnPolicy}</p>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>

          <div className="flex items-center gap-4">
            <motion.button
              className="flex items-center gap-2 text-sm text-neutral-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share className="h-4 w-4" />
              Share
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
