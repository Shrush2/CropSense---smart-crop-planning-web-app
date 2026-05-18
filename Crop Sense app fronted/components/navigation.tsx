"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react"; // top pe add kar

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href
      ? "text-primary font-semibold"
      : "text-muted-foreground hover:text-foreground";
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            {/* <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">CS</span>
            </div> */}

            <div className="w-10 h-10 bg-green-700 rounded-xl flex items-center justify-center">
              <Leaf className="text-white w-6 h-6" />
            </div>

            <span className="font-semibold text-foreground hidden sm:inline">
              CropSense
            </span>
          </Link>

          <div className="hidden sm:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm transition-colors ${isActive("/")}`}
            >
              Home
            </Link>
            <Link
              href="/crop-recommendation"
              className={`text-sm transition-colors ${isActive("/crop-recommendation")}`}
            >
              Recommendation
            </Link>
            <Link
              href="/yield-prediction"
              className={`text-sm transition-colors ${isActive("/yield-prediction")}`}
            >
              Yield
            </Link>
            <Link
              href="/profit-analysis"
              className={`text-sm transition-colors ${isActive("/profit-analysis")}`}
            >
              Profit
            </Link>
            <Link
              href="/climate-risk"
              className={`text-sm transition-colors ${isActive("/climate-risk")}`}
            >
              Climate Risk
            </Link>

            {/* //new addeed for chatbot */}
            <Link
              href="/chatbot"
              className={`text-sm transition-colors ${isActive("/chatbot")}`}
            >
              Chatbot
            </Link>
              {/* new added for diosease */}
            <Link
              href="/disease"
              className={`text-sm transition-colors ${isActive("/disease")}`}
            >
              Disease Detection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
