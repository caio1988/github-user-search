import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <Link to="/">
                <h4 className="nav-font">Bootcamp DevSuperior</h4>
            </Link>
        </div>
    </nav>
);

export default Navbar;