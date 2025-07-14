import Header from "@/components/Header";
import "./globals.css";
import { Inter,DM_Sans } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
	title: "Anu Radha - Wordpress Designer",
	description:
		"I&#39;m Anu Radha — a WordPress designer crafting powerful eCommerce sites with Elementor and SEO best practices. Let’s build your next high-converting, search-friendly website.",
	icons: {
		icon: "/favicon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header></Header>
				<div className="w-12/12 bg-[#171C28]">{children}</div>
			</body>
		</html>
	);
}
