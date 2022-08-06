import {Link} from "react-router-dom";

function Header(){
    return(
        <nav className="menu">
            <div className='container-fluid d-flex justify-content-between'>
                <Link to='/' className='navbar-brand fs-2 text-light'>Moovice</Link>
                    <ul className='d-flex align-items-center'>
                        <li className='text me-4'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='text me-4'>
                            <Link to='/popular' className='nav-link'>Popular</Link>
                        </li>
                        <li className='text me-4'>
                            <Link to='/favorites' className='nav-link'>Favorites</Link>
                        </li>
                        <li className='text me-4'>
                            <Link to='/weekly' className='nav-link'>Weekly</Link>
                        </li>
                    </ul>
                </div>
        </nav>
    )}
export default Header