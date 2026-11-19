import { ReactNode } from 'react'

interface FormCardProps {
  title: string
  description?: string
  children: ReactNode
}

export function FormCard({ title, description, children }: FormCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{title}</h2>
        {description && <p className="text-muted-foreground text-sm">{description}</p>}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}
