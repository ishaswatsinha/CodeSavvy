import React from 'react';
import {Link, matchPath} from 'react-router-dom';
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks  } from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import ProfileDropdown from '../core/Auth/ProfileDropdown';

const Navbar = () => {

    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile);
    const {totalItems} = useSelector((state)=> state.cart);

    // Get current path from the URL
    const location = useLocation();
    const currentPage = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    return (
        <div className=' flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700'>
            <div className='flex w-11/12 justify-between max-w-maxContent items-center'>
                {/*  Logo Section */}
                <Link to="/">
                    <img src={logo} alt="logo" width={160} height={42} loading='lazy' />
                </Link>
                {/* Nav Links Section */}

                <nav>
                    <ul className='flex gap-x-6 text-richblack-25'>
                    {
                        NavbarLinks.map((link , index) => (
                        
                            <li key={index}>
                                {
                                    link.title === "Catalog" ? (<div></div>):(
                                        <Link to={link?.path}>
                                            <p className={`${currentPage(link?.path) ? "text-yellow-5" : "text-white"}`}>
                                                {link.title}
                                            </p>
                                        </Link>
                                    )
                                }
                            </li>
                            
                        ))
                    }
                    </ul>
                </nav>

                {/* Login/SignUp Section */}
                <div className='flex gap-x-4 items-center'>
                    {
                        user && user.accountType !== "Instructor" && (
                            <Link to="/dashboard/cart" className='relative'>
                                <CiShoppingCart />
                                {
                                    totalItems > 0 && (
                                        <span className="absolute top-0 right-0 text-2xl text-yellow-500">{totalItems}</span>
                                    )
                                }
                                
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/login">
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                    Log In
                                </button>
                            </Link>
                        )
                    }
                    {
                        token === null && (
                            <Link to="/signup">
                                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                                    Sign Up
                                </button>
                            </Link>
                        )
                    }
                    {
                        token !== null && <ProfileDropdown/>
                    }

                </div>


            </div>

        </div>
    )
}

export default Navbar;