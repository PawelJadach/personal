import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH2({ children, className }: { children: ReactNode; className?: string }) {
	return <h2 className={cn(["scroll-m-20 pb-2 text-3xl font-semibold tracking-widest first:mt-0", className])}>{children}</h2>;
}
