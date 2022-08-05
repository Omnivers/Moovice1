import {Link} from "react-router-dom";

function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand'>Moovice</Link>
                <div className='collapse navbar-collapse justify-content-end'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/popular' className='nav-link'>Popular</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/favorites' className='nav-link'>Favorites</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/weekly' className='nav-link'>Weekly</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )}
export default Header