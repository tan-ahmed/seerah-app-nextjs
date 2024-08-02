import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import { GoogleAnalytics } from "@next/third-parties/google";
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "The Seerah App",
	description: "The Seerah App",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className={cn(lora.className, "container max-w-sm m-auto")}>{children}</body>
			</Providers>
			<GoogleAnalytics gaId="G-8EF00F7XR9" />
		</html>
	);
}
