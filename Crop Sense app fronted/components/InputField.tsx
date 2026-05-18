import { ReactNode } from 'react'

interface InputFieldProps {
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  help?: string
  icon?: ReactNode
  error?: string
  [key: string]: any
}

export function InputField({
  label,
  type = 'text',
  placeholder,
  required,
  help,
  icon,
  error,
  ...props
}: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 ${icon ? 'pl-10' : ''} rounded-md border border-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition ${
            error ? 'border-destructive focus:ring-destructive' : ''
          }`}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
      {help && !error && (
        <p className="text-xs text-muted-foreground">{help}</p>
      )}
    </div>
  )
}
