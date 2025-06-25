"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { cn } from "@/lib/utils"
import type React from "react"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "rotate"
  delay?: number
  duration?: number
}

export function ScrollReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 600,
}: ScrollRevealProps) {
  const { elementRef, isVisible } = useScrollAnimation()

  const animationClasses = {
    "fade-up": isVisible ? "animate-fade-up-in" : "animate-fade-up-out",
    "fade-down": isVisible ? "animate-fade-down-in" : "animate-fade-down-out",
    "fade-left": isVisible ? "animate-fade-left-in" : "animate-fade-left-out",
    "fade-right": isVisible ? "animate-fade-right-in" : "animate-fade-right-out",
    scale: isVisible ? "animate-scale-in" : "animate-scale-out",
    rotate: isVisible ? "animate-rotate-in" : "animate-rotate-out",
  }

  return (
    <div
      ref={elementRef}
      className={cn("transition-all ease-out", animationClasses[animation], className)}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
