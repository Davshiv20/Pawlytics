import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";


const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-20  text-black font-bold text-md px-5 ">
            {/* Home */}
            <li className="hover:text-gray-900">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="hover:text-gray-900">
                <Link to={'/allproduct'}>All Pets</Link>
            </li>

            {/* Signup */}
            {!user ? <li className="hover:text-gray-900">
                <Link to={'/signup'}>Signup</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li className="hover:text-gray-900">
                <Link to={'/login'}>Login</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li className="hover:text-gray-900">
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li className="hover:text-gray-900">
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer hover:text-gray-900" onClick={logout}>
                logout
            </li>}

            {/* Cart */}
            <li className="hover:text-gray-900">
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    )
    return (
        <nav className="bg-gradient-to-r  from-red-800 to-purple-800 sticky top-0">
            {/* main  */}
            <div className="lg:flex  lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="flex flex-row justify-between py-3 lg:py-0">
                    <Link to={'/'} className="flex items-center">
                        <img src="../img/logo.png" style={{width:"50px"}}/>
                        <h2 className=" hover:gradient-to-r from-blue-500 to-purple-500 text-black px-3 font-neucha text-2xl text-center">Pawlytics</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="right flex justify-center mb-4 lg:mb-0">
                    {navList}
                </div>

                {/* Search Bar  */}
                <SearchBar />
            </div>
        </nav>
    );
}

export default Navbar;
