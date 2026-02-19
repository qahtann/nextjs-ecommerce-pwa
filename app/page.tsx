import { MainLayout } from "@/components/layout/main-layout"
import { Hero } from "@/components/home/hero"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Categories } from "@/components/home/categories"
import { Newsletter } from "@/components/home/newsletter"

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Newsletter />
    </MainLayout>
  )
}
