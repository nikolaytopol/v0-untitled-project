export interface Product {
  id: string
  name: string
  slug: string
  description: string
  price: number
  salePrice?: number
  images: string[]
  category: string
  isNew?: boolean
  sizes: string[]
  colors: string[]
  material?: string
  care?: string[]
  details?: string[]
  shipping?: ShippingInfo
  promotion?: PromotionInfo
  rating?: number
  reviewCount?: number
}

export interface ShippingInfo {
  freeShipping: boolean
  estimatedDelivery: string
  coversDuties: boolean
  internationalShipping: boolean
  returnPolicy: string
  countries?: string[]
}

export interface PromotionInfo {
  code: string
  discount: number
  description: string
  minQuantity?: number
  validUntil?: string
}

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size: string
  color: string
}

export interface Address {
  id: string
  name: string
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
  promotionApplied?: string
}
