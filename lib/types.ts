export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  category: string
  description: string
  shortDescription?: string
  inStock: boolean
  rating?: number
  reviewCount?: number
  variants?: {
    size?: string[]
    color?: string[]
  }
  tags?: string[]
}

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: Date
  shippingAddress?: {
    name: string
    address: string
    city: string
    state: string
    zip: string
    country: string
  }
}
