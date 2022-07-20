import React from 'react';
import { NavLink } from 'react-router-dom';

// export default function Footer() {
//     return (
//         <>
//             <div className="container">
//                 {/* // <nav className="navbar navbar-expand-lg d-flex align-items-center fixed-bottom pb-2 mb-2 link-dark text-decoration-none bbcolor_bottom heliotrope_gray"> */}
//                 <div className="navbar navbar-expand-lg d-flex align-items-center fixed-bottom pb-2 mb-2 link-dark text-decoration-none bbcolor_bottom heliotrope_gray container-fluid">
//                     <NavLink className="navbar-brand text-left ms-2"
//                         to="/">Impulse</NavLink>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                         <ul className="navbar-nav">

//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/aboutus">Oh, about us? Well we are pretty great for one.</NavLink>
//                             </li>
//                         </ul>
//                         <ul className="navbar-nav text-right">
//                             <li className="nav-item dropup ms-auto text-right">
//                                 <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                     Links
//                                 </NavLink>
//                                 <ul className="dropdown-menu text-right">
//                                     <li><NavLink className="dropdown-item" to="#">Morgan LinkedIn</NavLink></li>
//                                     <li><NavLink className="dropdown-item" to="#">Evan LinkedIn</NavLink></li>
//                                     <li><NavLink className="dropdown-item" to="#">Adrian LinkedIn</NavLink></li>
//                                     <li><NavLink className="dropdown-item" to="#">Nellie LinkedIn</NavLink></li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 {/* // </nav> */}
//             </div>
//         </>
//     );
// }
export default function Footer() {
    return (
        <>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom pb-2 mb-2 link-dark text-decoration-none bbcolor_bottom heliotrope_gray ">
                    <span className="ms-3 fs-2 fw-semibold nameText"></span>
                    <span className="col d-flex align-items-center text-center justify-content-center link-dark px-2 text-muted">© 2022 Copyright Impulse Box</span>
                    <span className="ms-2 me-3 fs-1 fw-semibold nameText almond">||</span>
                    <NavLink to="/aboutus" className="col-md-4 d-flex align-items-center text-center justify-content-center link-dark nav-link px-2 text-muted">
                        {/* <svg className="bi me-2" width="40" height="32"><use to="/aboutus"> */}
                        Oh, about us? Well we are pretty great for one.
                    </NavLink>
                    <span className="ms-3 fs-2 fw-semibold nameText"></span>
                    <span className="ms-2 fs-1 fw-semibold nameText almond">||</span>

                    <ul className="nav col-md-4 mb-0 justify-content-center">
                        <span className="navbar-nav">
                            <li className="nav-item dropup ms-auto text-muted">
                                <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" text-muted>
                                    Links
                                </NavLink>
                            </li>
                            <span className="dropdown-menu">
                                <li><NavLink classNameName="dropdown-item" to="#">Morgan LinkedIn</NavLink></li>
                                <li><NavLink classNameName="dropdown-item" to="#">Evan LinkedIn</NavLink></li>
                                <li><NavLink classNameName="dropdown-item" to="#">Adrian LinkedIn</NavLink></li>
                                <li><NavLink classNameName="dropdown-item" to="#">Nellie LinkedIn</NavLink></li>
                            </span>
                        </span>
                        <li ><NavLink to="#" className="nav-link px-2 text-muted">Home</NavLink></li>
                        <li><NavLink to="#" className="nav-link px-2 text-muted">Features</NavLink></li>
                        <li><NavLink to="#" className="nav-link px-2 text-muted">Pricing</NavLink></li>
                    </ul>
                </footer>
            </div >
        </>
    )
}