interface ResultBoxProps {
  title: string;
  value: string | number;
  unit?: string;
  description?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export function ResultBox({ title, value, unit, description, icon, highlight }: ResultBoxProps) {
  return (
    <div className={`p-6 rounded-xl border transition-all ${
      highlight
        ? 'bg-primary/5 border-primary shadow-lg'
        : 'bg-card border-border hover:border-primary/50'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>
              {value}
            </span>
            {unit && <span className="text-lg text-muted-foreground">{unit}</span>}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground mt-2">{description}</p>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              highlight ? 'bg-primary/10' : 'bg-secondary/10'
            }`}>
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
