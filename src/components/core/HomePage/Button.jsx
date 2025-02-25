import React from 'react';
import {Link} from "react-router-dom";
import './Button.css';
const Button = ({children , active , linkto}) => {
    return (
        // text-center text-[13px] px-6 py-3 rounded font-bold
        <Link to={linkto}>
            <div className={`button-86
            ${active ?" bg-yellow-50 text-black":"bg-richblack-800"}
            `}
            >
                {children}
            </div>
        </Link>
    
    )
}

export default Button;