import { Loader2 } from 'lucide-react'

interface LoadingSpinnerProps {
  message?: string
}

export function LoadingSpinner({ message = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <Loader2 className="w-6 h-6 text-primary animate-spin" />
      <p className="text-muted-foreground text-sm">{message}</p>
    </div>
  )
}
