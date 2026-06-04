import { cn } from "@/lib/cn";

export function Section({
  children,
  id,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
