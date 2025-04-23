import React from 'react';
import {Link, matchPath} from 'react-router-dom';
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks  } from '../../data/navbar-links';
import { useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux';
import { CiShoppingCart } from "react-icons/ci";
import ProfileDropdown from '../core/Auth/ProfileDropdown';
import { IoIosArrowDown } from "react-icons/io";
import { useEffect , useState  } from 'react';
import { apiConnector } from '../../services/apiConnector'
import { categories } from '../../services/apis'
import { useDispatch } from 'react-redux'




const Navbar = ({setProgress}) => {
    const dispatch = useDispatch();


    const {token} = useSelector((state)=> state.auth);
    const {user} = useSelector((state)=> state.profile);
    const {totalItems} = useSelector((state)=> state.cart);

    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true)
    // const [searchValue, setSearchValue] = useState("")
    // const navigate = useNavigate();


    // Get current path from the URL
    const location = useLocation();
    const currentPage = (route) => {
        return matchPath({path:route}, location.pathname);
    }

    const [sublinks, setsublinks] = useState([]);
    const fetchSublinks = async () => {
        try {
            const result = await apiConnector("GET", categories.CATEGORIES_API);
            if (result?.data?.data?.length > 0) {
                setsublinks(result?.data?.data);
            }
            localStorage.setItem("sublinks", JSON.stringify(result.data.data));

        } catch (error) {
            // setsublinks(JSON.parse(localStorage.getItem("sublinks")));
            // console.log("could not fetch sublinks",localStorage.getItem("sublinks"));
            console.log(error);
        }
    }
    useEffect(() => {
        fetchSublinks();
    }, [])


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
                                    link.title === "Catalog" ? (<div>
                                        <div className='flex gap-1 items-center group  relative'>
                                            <p>{link.title}</p>
                                            <IoIosArrowDown />

                                            <div className='invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-900 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-[1.65em] group-hover:opacity-100 lg:w-[300px]'>
                                                <div className='absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5'></div>

                                                {
                                                    sublinks?.length < 0 ? (<div></div>) : (
                                                        sublinks?.map((element, index) => (
                                                            <Link to={`/catalog/${element?.name}`} key={index} className="rounded-lg bg-transparent py-4 pl-4 hover:bg-richblack-50" onClick={() => { dispatch(setProgress(30)) }}>
                                                                <p className=''>
                                                                    {element?.name}
                                                                </p>
                                                            </Link>
                                                        ))
                                                    )

                                                }


                                            </div>
                                        </div>
                                    </div>):(
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