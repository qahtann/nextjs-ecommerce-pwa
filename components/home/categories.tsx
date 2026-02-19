import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { categories } from "@/lib/data"

export function Categories() {
  const mainCategories = categories.slice(1, 7) // Skip "All"

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-3xl font-bold">Shop by Category</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mainCategories.map((category) => (
            <Link key={category} href={`/products?category=${category}`}>
              <Card className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold">{category}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
