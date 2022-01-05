import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';

import './Header.css';

const Header = () => {
    const { isAuthenticated, email } = useContext(AuthContext);

    return (
        <header id="site-header">
            <nav className="header-navbar navbar">
                <section className="header-navbar-dashboard">
                    <div className="left-bar logo">
                        <Link to="/Healthy-Paw" ><i className="fa fa-paw logo-paw"></i> <h3>Healthy</h3></Link>
                    </div>

                    <div className="nav-title">
                        <h1>Healthy Paw</h1>
                    </div>

                    <div className="right-bar">
                        {isAuthenticated
                            ? <div className="logged-user">
                                <ul>
                                    <li id="greeting-text">Welcome, {email}!</li>
                                    <li id="user-icon"><i className="fas fa-user"></i></li>
                                    <li><Link to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</Link></li>
                                </ul>
                            </div>
                            : <div className="guest-user">
                                <ul>
                                    <li><Link to="/register"><i className="fas fa-user-plus"></i> Register</Link></li>
                                    <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                                </ul>
                            </div>
                        }
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;
