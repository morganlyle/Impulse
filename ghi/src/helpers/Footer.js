import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="container nameText">
                <footer className="d-flex shad_bottom flex-wrap justify-content-between rounded align-items-center py-3 my-4 mb-2 link-dark text-decoration-none b_cards heliotrope_gray ">
                    <span className="ms-3 fs-2 fw-semibold nameText"></span>
                    <span className="col d-flex align-items-center text-center justify-content-center link-dark px-2 text-muted">© 2022 Copyright Impulse Box</span>
                    <span className="ms-2 me-3 fs-1 fw-semibold nameText almond">||</span>
                    <NavLink to="/aboutus" className="col-md-4 d-flex align-items-center text-center justify-content-center link-dark nav-link px-2 text-muted">
                        Oh, about us? Well for one we are really amazing.
                    </NavLink>
                    <span className="ms-3 fs-2 fw-semibold nameText"></span>
                    <span className="ms-2 fs-1 fw-semibold nameText almond">||</span>
                    <ul className="nav col-md-4 mb-0 justify-content-center">
                        <li ><NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink></li>
                        <ul className="navbar-nav text-right">
                            <li className=" ps-1 nav-item dropup ms-auto text-center">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">                                    Links
                                </NavLink>
                                <ul className="dropdown-menu text-right">
                                    <li><a className="dropdown-item " href="https://www.linkedin.com/in/morganlyle1/">Morgan LinkedIn</a></li>
                                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/eyw92/">Evan LinkedIn</a></li>
                                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/adrian-dorado/">Adrian LinkedIn</a></li>
                                    <li><a className="dropdown-item" href="https://www.linkedin.com/in/nellienelson/">Nellie LinkedIn</a></li>
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </footer>
            </div >
        </>
    )
}
