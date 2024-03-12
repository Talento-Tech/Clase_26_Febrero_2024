import { NavLink } from "react-router-dom";

const NavBar = () =>{
    const activeStyle = 'underline underline-offset-4';

    return(
        <nav className="flex justify-between item-center fixed z-10 w-fill py-5 px-8 text-sm font-light">
            <ul className="flex item-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to = '/'>
                        Mi página
                    </NavLink>
                </li>

                <li className="font-semibold">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Home
                    </NavLink>
                </li>

                <li>
                    <NavLink 
                        to="/Developers" 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Developers
                    </NavLink>
                </li>

                <li className="font-semibold">
                    <NavLink 
                        to="Tutorials" 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Tutorials
                    </NavLink>
                </li>

                <li className="font-semibold">
                    <NavLink 
                        to="/Contact" 
                        className={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        Contact me
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;