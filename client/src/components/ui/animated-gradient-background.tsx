import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const AnimatedGradientBackground = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      
      const x = clientX / innerWidth;
      const y = clientY / innerHeight;
      
      container.style.setProperty("--mouse-x", `${x}`);
      container.style.setProperty("--mouse-y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 -z-50 h-full w-full overflow-hidden bg-background transition-colors duration-500",
        className
      )}
    >
      <div className="absolute inset-0 opacity-40 dark:opacity-20">
        <div className="absolute -top-[40%] -left-[20%] h-[80%] w-[80%] rounded-full bg-blue-400/30 blur-[120px] animate-blob mix-blend-multiply dark:mix-blend-screen filter" />
        <div className="absolute top-[20%] -right-[20%] h-[80%] w-[80%] rounded-full bg-purple-400/30 blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply dark:mix-blend-screen filter" />
        <div className="absolute -bottom-[40%] left-[20%] h-[80%] w-[80%] rounded-full bg-indigo-400/30 blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply dark:mix-blend-screen filter" />
      </div>
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      {children}
    </div>
  );
};
