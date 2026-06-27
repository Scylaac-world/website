import { cn } from "@/app/lib/utils";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-[#0f0f0f]/75 backdrop-blur-xl border border-white/5 rounded-3xl shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}