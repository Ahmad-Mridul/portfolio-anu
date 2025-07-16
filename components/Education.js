"use client";
import Image from "next/image";
import React from "react";

const Education = () => {
	const educations = [
		{
icon: "https://bhsfeni.edu.bd/wp-content/uploads/2023/10/bhstrans_logo.png",
			institution: "Baligoan High School",
			department: "Business Studies",
			from: "",
			to: "",
			completed: "2013",
			project: "",
			research: "",
		},
		{
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGdDDteBb0Sf9-JKwRCDdNnbn9OyPzVruUQ&s",
			institution: "Nawab Fayzunnessa Govt. College",
			department: "Business Studies",
			from: "2013",
			to: "2015",
			project: "",
			research: "",
		},
		// Hons
		{
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGdDDteBb0Sf9-JKwRCDdNnbn9OyPzVruUQ&s",
			institution: "Nawab Fayzunnessa Govt. College",
			department: "Bachelor of Business Administration in Management",
			from: "2015",
			to: "2019",
			project: "",
			research: "",
		},
{
			icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhaQV_nUdatTtf2G8HHcgxOOCfEnLvK9gVYA&s",
			institution: "Nawab Fayzunnessa Govt. College",
			department: "Master of Business Administration in Management",
			from: "",
			to: "",
			completed: "2013",
			project: "",
			research: "",
		}
	];
	return (
		<div id="education" className="w-full md:px-10 py-8 text-white space-y-5">
			<h2 className="font-bold">Education</h2>
			<div className="space-y-10">
				{educations?.map((edu, idx) => (
					<div className="group space-y-3 md:space-y-5" key={idx}>
						<Image
							src={edu?.icon}
							alt={edu?.institution}
							width={80}
							height={80}
						/>
						<h4>{edu?.institution}</h4>
						<p>{edu?.department}</p>
						<p>{edu?.completed}</p>
						{edu?.from && (
							<p>
								{edu?.from}-{edu?.to}
							</p>
						)}
						{edu?.project && <p>{edu?.project}</p>}
						<div className="w-3/4 group-hover:w-full border-b border-gray-400 mt-4 transition-all duration-300" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Education;
