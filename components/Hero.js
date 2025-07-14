"use client";
import React from "react";
import HeroAnimation from "./HeroLottie"
import SocialLinks from "./SocialLinks";
import Link from "next/link";
const Hero = () => {
	return (
		<div className="w-full md:flex py-10 text-white md:pt-30" id="top">
			<div className="md:w-1/2 flex items-center justify-center">
				<div className="space-y-5">
					<div className="space-y-5">
						<div className="space-y-5">
							<h1 className="font-bold">
								Hi all, I&#39;m Anu Radha 👋
							</h1>
							<p id="resume">
								🚀 A passionate web designer specializing in WordPress, Webflow, Wix, and Squarespace. Expert in creating custom, responsive, and SEO-friendly websites using Elementor, WooCommerce, and modern design principles — delivering beautiful and effective digital experiences tailored to your needs.
							</p>
						</div>
						<div className="">
							<SocialLinks/>
						</div>
					</div>
					<div className="flex gap-5">
						<Link href="#contact-me" className="btn bg-[#ACBCF9] hover:border-[#ACBCF9] hover:text-[#ACBCF9] hover:bg-transparent">
							Contact Me
						</Link>
						<Link href="https://drive.google.com/file/d/1u1K1JTw9ZUbuGcN9I23uWfrZCFD_oFVv/view" target="_blank" className="btn bg-[#ACBCF9] hover:border-[#ACBCF9] hover:text-[#ACBCF9] hover:bg-transparent">
							Download My CV
						</Link>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 flex items-center justify-center">
				<HeroAnimation></HeroAnimation>
			</div>
		</div>
	);
};

export default Hero;
