import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="nav-container">
            <div className="nav-logo">
                <h2>Instant Buy</h2>
            </div>
            <div className="nav-links">
                <nav className="nav">
                    <ul>

                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/login">Contact</Link>
                        </li>
                        <li>
                            <Link className="btn-book" to="/login">{(loggedInUser?.name || loggedInUser?.displayName) ? (loggedInUser.name || loggedInUser.displayName) : 'Login'}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;