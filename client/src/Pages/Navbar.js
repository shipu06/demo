import React from 'react';
import '../App.css';
import { Link} from 'react-router-dom';

const Navbar = () => {
    // const navigate = useNavigate();
   
    return (
        <div className='container'>
            <img alt="logo"
            className="logo"
            src="https://yt3.ggpht.com/ytc/AMLnZu907ujnXt1ae1wVUDH8NrYtoLeeI5XCK7OsMU3HCw=s900-c-k-c0x00ffffff-no-rj" />
            <ul className='nav-ul'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createpost">Create a post</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;