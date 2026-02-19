"use client"

import * as React from "react"
import { toast as sonnerToast } from "sonner"

export function useToast() {
  return {
    toast: (message: string, options?: { variant?: "default" | "destructive" }) => {
      if (options?.variant === "destructive") {
        sonnerToast.error(message)
      } else {
        sonnerToast.success(message)
      }
    },
  }
}
