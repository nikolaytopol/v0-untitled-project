"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export default function AddProductPage() {
  const [images, setImages] = useState<string[]>([])
  const [isNew, setIsNew] = useState(true)

  const handleAddImage = () => {
    // In a real app, this would open a file picker and upload the image
    // For this example, we'll just add a placeholder
    setImages((prev) => [...prev, "/placeholder.svg?height=800&width=600"])
    toast({
      title: "Image added",
      description: "The image has been added to the product",
    })
  }

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send the form data to your API
    toast({
      title: "Product added",
      description: "The product has been added to your catalog",
    })

    // In a real app, you would redirect to the admin dashboard or product page
  }

  return (
    <div className="container py-12 px-4">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/admin">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to dashboard
        </Link>
      </Button>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-light tracking-wide mb-8">Add New Product</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug">Slug (URL)</Label>
            <Input id="slug" required />
            <p className="text-sm text-muted-foreground">
              This will be used in the product URL (e.g., /products/your-slug)
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" rows={4} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input id="price" type="number" step="0.01" min="0" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dresses">Dresses</SelectItem>
                  <SelectItem value="tops">Tops</SelectItem>
                  <SelectItem value="bottoms">Bottoms</SelectItem>
                  <SelectItem value="outerwear">Outerwear</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Product Images</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-[3/4] border rounded-md overflow-hidden group">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Product image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleRemoveImage(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                className="aspect-[3/4] flex flex-col items-center justify-center border-dashed"
                onClick={handleAddImage}
              >
                <Upload className="h-6 w-6 mb-2" />
                Add Image
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Sizes</Label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox id={`size-${size}`} />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label>Colors</Label>
            <div className="grid grid-cols-2 gap-2">
              {["Black", "White", "Beige", "Navy", "Grey"].map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={`color-${color}`} />
                  <Label htmlFor={`color-${color}`}>{color}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="is-new" checked={isNew} onCheckedChange={(checked) => setIsNew(!!checked)} />
            <Label htmlFor="is-new">Mark as new arrival</Label>
          </div>

          <Button type="submit" className="w-full">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  )
}
