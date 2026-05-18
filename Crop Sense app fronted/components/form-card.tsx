interface FormCardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function FormCard({ title, description, children }: FormCardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
