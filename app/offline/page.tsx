import Link from "next/link"
import { MainLayout } from "@/components/layout/main-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { WifiOff } from "lucide-react"

export default function OfflinePage() {
  return (
    <MainLayout>
      <div className="container flex items-center justify-center px-4 py-16 md:px-6">
        <Card className="mx-auto max-w-md text-center">
          <CardContent className="py-12">
            <WifiOff className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h1 className="mb-2 text-2xl font-semibold">You're Offline</h1>
            <p className="mb-6 text-muted-foreground">
              It looks like you've lost your internet connection. Don't worry, you can
              still browse cached content.
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
