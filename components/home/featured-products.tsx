import { ProductCard } from "@/components/ecommerce/product-card"
import { products } from "@/lib/data"

export function FeaturedProducts() {
  const featured = products.slice(0, 8)

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
