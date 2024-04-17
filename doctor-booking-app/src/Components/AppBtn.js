import React from "react";

export default function AppBtn(props) {
    const {onClick, label, icon: Icon} = props;
    return (
        <>
            <button 
                onClick={onClick} 
                className="bg-blue-500 text-white w-full p-2 text-xl rounded-lg hover:bg-blue-700 focus:bg-blue-700 flex items-center justify-center"
            >
                {Icon && <Icon className="mr-2" />} {/* Render the icon if provided */}
                {label}
            </button>
        </>
    );
}
