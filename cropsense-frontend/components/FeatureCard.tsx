import Link from 'next/link'
import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className="group rounded-lg border border-border bg-card p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer h-full flex flex-col gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition text-primary">
          {icon}
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-auto pt-2 text-primary text-sm font-medium group-hover:translate-x-1 transition">
          Get Started →
        </div>
      </div>
    </Link>
  )
}
