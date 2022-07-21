import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top pb-2 mb-2 link-dark text-decoration-none bbcolor_bottom heliotrope_gray ">
                    <span className="ms-3 fs-2 fw-semibold nameText"></span>
                    <span className="col d-flex align-items-center text-center justify-content-center link-dark px-2 text-muted">© 2022 Copyright Impulse Box</span>
                    <span className="ms-2 me-3 fs-1 fw-semibold nameText almond">||</span>
                    <NavLink to="/aboutus" className="col-md-4 d-flex align-items-center text-center justify-content-center link-dark nav-link px-2 text-muted">
                        Oh, about us? Well for one we are really amazing.
                    </NavLink>
                    <span className="ms-3 fs-2 fw-semibold nameText"></span>
                    <span className="ms-2 fs-1 fw-semibold nameText almond">||</span>
                    <ul className="nav col-md-4 mb-0 justify-content-center">
                        <ul className="navbar-nav text-right">
                            <li className="nav-item dropup ms-auto text-center">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">                                    Links
                                </NavLink>
                                <span className="dropdown-menu text-right">
                                    <li><NavLink className="dropdown-item " to="https://www.linkedin.com/in/morganlyle1/">Morgan LinkedIn</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="https://www.linkedin.com/">Evan LinkedIn</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="https://www.linkedin.com/in/adrian-dorado/">Adrian LinkedIn</NavLink></li>
                                    <li><NavLink className="dropdown-item" to="https://www.linkedin.com/in/nellienelson/">Nellie LinkedIn</NavLink></li>
                                </span>
                            </li>
                        </ul>
                        <li ><NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>
                        <li><NavLink to="/products" className="nav-link px-2 text-muted">Products</NavLink></li>
                        <li><NavLink to="/pricing" className="nav-link px-2 text-muted">Pricing</NavLink></li>
                    </ul>
                </footer>
            </div >
        </>
    )
}