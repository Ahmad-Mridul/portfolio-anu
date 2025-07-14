import Image from 'next/image';
import React from 'react';
import SocialLinks from './SocialLinks';

const Footer = () => {
    return (
        <div className='flex items-center justify-between py-20' id='contact-me'>
            <div className="space-y-3 text-white">
                <h2>Reach Out to me!</h2>
                <p className='text-gray-400'>Discuss a project or just want to say hi? My Inbox is open for all.</p>
                <p>Software Engineer Anu Radha || WordPress Web Designer</p>
                <SocialLinks/>
            </div>
            <div className="">
                <Image
                    src="https://i.ibb.co/23jVRjkk/images.jpg"
                    alt="Picture of Anu Radha"
                    width={200}
                    height={200}
                    className='rounded-4xl'
                />
            </div>
        </div>
    );
};

export default Footer;