export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-border"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
      </div>
    </div>
  );
}

export function LoadingText() {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
      <span className="text-sm">Analyzing...</span>
    </div>
  );
}
