'use client';
import { ArrowRight, LucideIcon } from 'lucide-react';
import { cn } from "@/lib/utils";

interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  icon?: LucideIcon;
}

export function FlowButton({ text = "Modern Button", className, icon: Icon = ArrowRight, ...props }: FlowButtonProps) {
  return (
    <button 
      className={cn(
        "group relative flex items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-foreground/40 bg-transparent px-8 py-3 text-sm font-semibold text-foreground cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-transparent hover:text-background hover:rounded-[12px] active:scale-[0.95]",
        className
      )}
      {...props}
    >
      {/* Left icon (arr-2) */}
      <Icon 
        className="absolute w-4 h-4 left-[-25%] stroke-foreground fill-none z-[9] group-hover:left-4 group-hover:stroke-background transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />

      {/* Text */}
      <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out">
        {text}
      </span>

      {/* Circle */}
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-foreground rounded-[50%] opacity-0 group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

      {/* Right icon (arr-1) */}
      <Icon 
        className="absolute w-4 h-4 right-4 stroke-foreground fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-background transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
      />
    </button>
  );
}
