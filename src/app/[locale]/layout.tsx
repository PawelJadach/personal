import { ChangeThemeButton } from "@/components/change-theme-button";
import { ThemeProvider } from "@/components/theme-provider";
import { locales } from "@/config/config";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import "../globals.css";
import { Navbar } from "@/components/navbar";

interface LocaleLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  if (!locales.includes(locale as any)) notFound();

  return (
    <html lang={locale}>
      <body className="p-4">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="max-w-screen-lg	mx-auto mt-5">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
