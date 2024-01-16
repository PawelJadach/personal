import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyH1({ children, className }: { children: ReactNode; className?: string }) {
	return <h1 className={cn(["tracking-widest scroll-m-20 text-4xl font-extrabold lg:text-5xl", className])}>{children}</h1>;
}
