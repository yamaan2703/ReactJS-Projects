import React from 'react';
import { MdMobileScreenShare } from 'react-icons/md';
import { IoIosCard } from "react-icons/io";
import { SiAltiumdesigner } from "react-icons/si";
import { MdShoppingCart } from "react-icons/md";
import { BiSolidNotepad } from "react-icons/bi";
import { MdError } from "react-icons/md";
import AppBtn from './AppBtn';

const cardData = [
  {
    icon: <MdMobileScreenShare />,
    title: 'Mobile App Development',
    description: 'Getweys Mobile app developers help you by creating a user-friendly Mobile application according to the latest trends and technologies.',
    buttonText: 'Contact Now'
  },
  {
    icon: <IoIosCard />,
    title: 'Website Development',
    description: 'Getweys is included in the top website development Companies having Expert Website Developers in the Pakistan and provides a wide range of creative web development with some user-friendly functionalities. Learn More',
    buttonText: 'Contact Now'
  },
  {
    icon: <SiAltiumdesigner />,
    title: 'Graphic Designing',
    description: 'A Perfect Graphic Design Agency designs user-friendly and creative graphical representations that help grow your business online. Learn More',
    buttonText: 'Contact Now'
  },
  {
    icon: <MdShoppingCart />,
    title: 'Social Media Marketing',
    description: 'Getweys Social Media Marketing Agency provides major innovative marketing solutions that help you grow your business on social media platforms. Learn More',
    buttonText: 'Contact Now'
  },
  {
    icon: <BiSolidNotepad />,
    title: 'SEO & Content Marketing',
    description: 'From the Local SEO service to the Foreign SEO Getweys helps your business to rank# 1 on Google. Get Remarkable Services of On-page, Off-page & Technical SEO. Learn More',
    buttonText: 'Contact Now'
  },
  {
    icon: <MdError />,
    title: 'WordPress Error Solving',
    description: 'Getweys Not only designs your Custom Website but also resolves your WordPress Errors in real time as we have some highly skilled WordPress developers. Learn More',
    buttonText: 'Contact Now'
  },
];

const AppCard = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      {cardData.map((card, index) => (
          <div key={index} className="flex flex-col justify-center items-center text-center rounded py-10 px-5 shadow-lg">
          <div className="icon text-4xl hover:text-[#ec193f] hover:shadow-xl p-5 rounded-full my-4">
            {card.icon}
          </div>
          <div>
            <h1 className="text-2xl font-semibold my-2 text-gray-700 hover:text-[#ec193f]">{card.title}</h1>
            <p className="py-4 text-gray-600">{card.description}</p>
          </div>
          <div className='mt-5 w-[150px]'>
            <AppBtn label={card.buttonText} />
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default AppCard;
