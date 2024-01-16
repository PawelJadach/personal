"use client";

import * as React from "react";
import Link from "next/link";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { ChangeThemeButton } from "./change-theme-button";

const navigationLinks = [
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/portfolio",
		label: "Portfolio",
	},
	{
		href: "/price",
		label: "Price",
	},
	{
		href: "/contact",
		label: "Contact",
	},
];

export function Navbar() {
	return (
		<NavigationMenu className="px-10 py-6 fixed top-0 left-0 right-0 bg-white dark:bg-black flex justify-between">
			<Link href="/" className="font-bold tracking-widest text-primary">
				PawelJadach.
			</Link>
			<NavigationMenuList>
				{navigationLinks.map((link) => (
					<NavigationMenuItem key={link.href}>
						<NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
							<Link href={link.href}>{link.label}</Link>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
			<div className="ml-3">
				<ChangeThemeButton />
			</div>
		</NavigationMenu>
	);
}
