import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <MainLayout>
      <div className="container px-4 py-16 md:px-6">
        <Card className="mx-auto max-w-md">
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <CheckCircle2 className="mb-4 h-16 w-16 text-green-500" />
            <h1 className="mb-2 text-2xl font-bold">Order Placed Successfully!</h1>
            <p className="mb-6 text-muted-foreground">
              Thank you for your purchase. Your order has been received and is being
              processed.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/account">View Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
