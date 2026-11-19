import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  stat?: string;
}

export function FeatureCard({ title, description, icon, href, stat }: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className="group p-6 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col">
        <div className="mb-4 inline-flex w-fit p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <div className="text-primary group-hover:scale-110 transition-transform">
            {icon}
          </div>
        </div>

        <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>

        {stat && (
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground">Quick stat</p>
            <p className="text-xl font-bold text-primary">{stat}</p>
          </div>
        )}

        <div className="mt-4 inline-flex items-center text-sm text-primary group-hover:translate-x-1 transition-transform">
          Learn more →
        </div>
      </div>
    </Link>
  );
}
