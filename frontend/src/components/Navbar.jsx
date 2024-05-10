import { useState, useContext } from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'

import {links} from "../data"
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'
import "./navbar.css"

import useUserId from '../useUserId'
import { AuthContext } from '../App';

const Navbar = () => {
    const navigate = useNavigate();
    const {clearStoredUserId} = useUserId();

    const {userId} = useUserId();
        const[isNavShowing, setIsNavShowing] = useState(false);
    

    const handleLogout = () => {
        clearStoredUserId();
        window.location.reload();
        if (userId!=null) {
            console.log("from logout",userId);
            
        }
    }

    const handleLogin = () => {
        if (!userId) {
            navigate('/login');
            console.log("from login", userId);
        }
    }
    console.log("nav:userId", userId);
  return (
    <nav>
        <div className="container nav_container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
           Bhumi NGO
            </Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_Nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? "active-nav" : ""} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/>  : <GoThreeBars/>
                }
               
            </button>
            {
                userId ? <button className="nav_btn" onClick={handleLogout}>Logout</button> : <button className="nav_btn" onClick={handleLogin}>Admin Login</button>
            }
            {/* <button className="nav_btn" onClick={handleSubmit}>{userId ? "Logout" : "Login"}</button> */}
            
        </div>
    </nav>
  )
}
 

export default Navbar