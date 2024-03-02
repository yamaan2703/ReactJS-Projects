import React from "react";
import MenuImg from "../images/Menu.jpg";
import MenuCard from "../Components/menuCard";

export default function Menu() {
    return (
        <div className="bg-[#0d1819]">
            <div className="menu_img relative h-[500px] bg-center bg-cover">
                <div className="menu_overlay absolute inset-0 bg-black opacity-50"></div>
                <img src={MenuImg} alt="Menu" className="w-full h-full object-cover" />
                <h1 className="text-white text-5xl md:text-3xl lg:text-5xl font-serif text-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Our restaurant offers a delightful menu with exceptional flavors at reasonable prices...</h1>
            </div>
            
            <div className=""></div>
            <MenuCard />
        </div>
    );
}
