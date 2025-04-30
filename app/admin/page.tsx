"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import { products } from "@/lib/products"

export default function AdminPage() {
  const [productList, setProductList] = useState(products)

  const handleDeleteProduct = (id: string) => {
    setProductList((prev) => prev.filter((product) => product.id !== id))
    toast({
      title: "Product deleted",
      description: "The product has been removed from the catalog",
    })
  }

  return (
    <div className="container py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <Button variant="ghost" asChild className="mb-2">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to site
            </Link>
          </Button>
          <h1 className="text-3xl font-light tracking-wide">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your product catalog</p>
        </div>

        <Button asChild>
          <Link href="/admin/add-product">
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Telegram Bot Integration</CardTitle>
            <CardDescription>Your Telegram bot is active and ready to receive product images.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Send photos to your Telegram bot to add new products to your collection. The bot will forward the images
              to you for approval before they are added to the site.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="/admin/telegram-settings">Configure Bot Settings</Link>
            </Button>
          </CardFooter>
        </Card>

        <h2 className="text-xl font-medium mt-6 mb-4">Product Catalog</h2>

        <div className="grid gap-4">
          {productList.map((product) => (
            <div key={product.id} className="flex items-center border p-4 rounded-lg">
              <div className="relative w-16 h-20 flex-shrink-0">
                <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${product.price.toFixed(2)} · {product.category}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/edit-product/${product.id}`}>Edit</Link>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDeleteProduct(product.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
