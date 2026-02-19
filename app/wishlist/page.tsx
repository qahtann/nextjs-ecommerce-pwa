"use client"

import { MainLayout } from "@/components/layout/main-layout"
import { ProductCard } from "@/components/ecommerce/product-card"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useWishlistStore } from "@/lib/store/wishlist-store"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items)

  return (
    <MainLayout>
      <div className="container px-4 py-8 md:px-6">
        <h1 className="mb-8 text-3xl font-bold">Wishlist</h1>

        {items.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 text-center">
              <Heart className="mb-4 h-16 w-16 text-muted-foreground" />
              <h2 className="mb-2 text-2xl font-semibold">Your wishlist is empty</h2>
              <p className="mb-6 text-muted-foreground">
                Start adding products to your wishlist
              </p>
              <Button asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
