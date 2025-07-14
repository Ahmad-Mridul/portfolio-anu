"use client";
import Education from "./Education";
import SkillsLottie from "./SkillsLottie";
import Image from "next/image";

const Skills = () => {
	const skills = [
		{
			title: "HTML",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		},
		{
			title: "CSS",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		},
		{
			title: "Bootstrap",
			icon: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
		},
		{
			title: "Tailwind CSS",
			icon: "https://www.svgrepo.com/show/374118/tailwind.svg",
		},
		{
			title: "WordPress",
			icon: "https://cdn-icons-png.flaticon.com/512/174/174881.png",
		},
		{
			title: "Wix",
			icon: "https://cdn-icons-png.flaticon.com/512/5968/5968770.png",
		},
		{
			title: "Squarespace",
			icon: "https://i.pinimg.com/280x280_RS/1c/ea/1c/1cea1cc797f510a845c8caba89ca8cf0.jpg",
		},
		{
			title: "Git",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
		},
		{
			title: "GitHub",
			icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
		}
	];
	return (
		<div className="w-full">
			<div className="w-full md:flex py-10 text-white">
				<div className="md:w-1/2 order-2">
					<div className="space-y-5">
						<h1 className="font-bold">What I do?</h1>
						<p>
							🚀 Enthusiastic Web Designer Navigating the No-Code and CMS Ecosystem — specializing in WordPress, Webflow, Wix, and Squarespace to craft beautiful, functional, and SEO-friendly websites.
						</p>
						<div className="grid grid-cols-4 gap-5">
							{skills.map((skill, idx) => (
								<div
									className="cursor-pointer text-center bg-[#272a32] rounded-2xl p-3 transition duration-200 hover:shadow-lg hover:shadow-gray-700"
									key={idx}
								>
									<Image
										src={skill.icon}
										alt={skill.title}
										width={40}
										height={40}
										className="object-contain m-2 mx-auto"
									/>
									<h6 className="text-[10px]">
										{skill.title}
									</h6>
								</div>
							))}
						</div>
						<p>
							⚡ Designing responsive and visually engaging websites using WordPress, Webflow, Wix, and Squarespace <br />⚡ Creating custom eCommerce experiences with WooCommerce, and payment gateways <br /><span id="education">⚡ IOptimizing websites for SEO, speed, and mobile performance to drive traffic and conversions</span>
						</p>
					</div>
				</div>
				<div className="md:w-1/2 order-1 flex items-center justify-center">
					<SkillsLottie />
				</div>
			</div>
			
		</div>
	);
};

export default Skills;
