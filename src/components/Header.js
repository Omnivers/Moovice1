import { useState } from "react";
import {Link} from "react-router-dom";
function Header(){
    const [navBar,setNavBar]=useState(false);
    const show =()=>{
        setNavBar(!navBar)
        if(navBar){
        document.getElementById('nav').style.display='none'
        }
        else{
        document.getElementById('nav').style.display='block'
        }
    }
    return(
        <nav className="menu">
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand fs-2 text-light'>Moovice</Link>
                    <ul id="nav">
                        <li className='text'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='text'>
                            <Link to='/popular' className='nav-link'>Popular</Link>
                        </li>
                        <li className='text'>
                            <Link to='/favorites' className='nav-link'>Favorites</Link>
                        </li>
                        <li className='text'>
                            <Link to='/weekly' className='nav-link'>Weekly</Link>
                        </li>
                    </ul>
                </div>
                <i className="fa-solid fa-bars fa-2x m-2 burger" onClick={show}></i>
        </nav>
    )}
export default Header