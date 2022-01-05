import { NavLink } from 'react-router-dom';

import './BlogNav.css';

const BlogNav = () => {
    return (
        <nav className="blog-nav">
            <div className="blog-nav-container">
                <ul>
                    <li><NavLink activeClassName="nav-link-selected" to="/Healthy-Paw/blog/All">All</NavLink></li>
                    <li><NavLink activeClassName="nav-link-selected" to="/Healthy-Paw/blog/PetCare">Pet Care</NavLink></li>
                    <li><NavLink activeClassName="nav-link-selected" to="/Healthy-Paw/blog/Diseases">Diseases</NavLink></li>
                    <li><NavLink activeClassName="nav-link-selected" to="/Healthy-Paw/blog/Other">Other</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default BlogNav;
