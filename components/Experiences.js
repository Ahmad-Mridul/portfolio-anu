import React from "react";
import ExperienceCard from "./ExperienceCard";

const AllExperiences = () => {
	const experiences = [
		{
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-2dlDEOJ89leEWHPsgtr2_ErYRfaQsJ6Qg&s",
			company: "Modern Computer Training Center",
			position: "Computer Trainer",
			duration: "Jan 2023 – Sep 2023",
			description:
				"Conducted structured computer training sessions covering MS Office, internet usage, and basic IT skills. Developed course materials and supported learners in applying digital tools confidently in real-world contexts.",
		},
		{
			logo: "https://genexinfosys.com/images/bu_logo.png",
			company: "Genex Infosys Limited",
			position: "Customer Service Officer",
			duration: "Jul 2024 – Dec 2024",
			description:
				"Provides support to customers by answering inquiries, resolving issues, and ensuring a high level of customer satisfaction. Acts as the first point of contact, handles complaints professionally, and coordinates with internal teams to deliver timely solutions.",
		},
		{
			logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz22N0k4TM7_dVAiFfJVDx4cIDMD4GHHZWQg&s",
			company: "Layan Tech",
			position: "WordPress Designer",
			duration: "Dec 2024 - Continue",
			description:
				"Specializes in designing and customizing responsive, user-friendly WordPress websites. Skilled in themes, plugins, and visual builders like Elementor or WPBakery, with a focus on creating engaging and functional designs that meet client goals.",
		},
	];
	return (
		<div className="">
			<h2 className="font-bold text-white">Experiences</h2>
			<div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
				{experiences.map((exp, idx) => (
					<ExperienceCard exp={exp} key={idx} />
				))}
			</div>
		</div>
	);
};

export default AllExperiences;
