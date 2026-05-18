import { ReactNode } from 'react'

interface ResultBoxProps {
  title: string
  value?: string | number
  subtitle?: string
  children?: ReactNode
  className?: string
}

export function ResultBox({ title, value, subtitle, children, className = '' }: ResultBoxProps) {
  return (
    <div className={`rounded-lg border border-border bg-gradient-to-br from-primary/5 to-primary/10 p-6 ${className}`}>
      <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
      {value !== undefined && (
        <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      )}
      {subtitle && (
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      )}
      {children}
    </div>
  )
}
