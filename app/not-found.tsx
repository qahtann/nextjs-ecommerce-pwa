import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container flex items-center justify-center px-4 py-16 md:px-6">
        <Card className="mx-auto max-w-md text-center">
          <CardContent className="py-12">
            <h1 className="mb-4 text-6xl font-bold">404</h1>
            <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
            <p className="mb-6 text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
