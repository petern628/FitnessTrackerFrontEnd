import {
    NavLink,
    // useNavigate 
} from "react-router-dom";

function Nav({ isLoggedIn, setIsLoggedIn }) {
    // const navigate = useNavigate();

    // function handleLogOut() {
    //     localStorage.removeItem('userToken');
    //     setIsLoggedIn(false);
    //     navigate('/login');
    // }

    if (isLoggedIn) {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/">Routines</NavLink></li>
                    <li><NavLink to="/user-routines">My Routines</NavLink></li>
                    <li><NavLink to="/activities">Activities</NavLink></li>
                    <li><NavLink to="/logout">Logout</NavLink></li>
                </ul>
            </nav>
        );
    }
    else {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/">Routines</NavLink></li>
                    <li><NavLink to="/activities">Activities</NavLink></li>
                    <li><NavLink to="/register">Register</NavLink></li>
                    <li><NavLink to="/login">Login</NavLink></li>
                </ul>
            </nav>
        );
    }


}

export default Nav;