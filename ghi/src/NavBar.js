import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <nav className="mb-3 pb-2 pt-2 heliotrope_gray navbar navbar-expand navbar bbcolor_bottom">
                <div className="container-fluid">
                    <NavLink className="navbar-brand siteText" to="/">Impulse</NavLink>
                    <span className="me-2 ms-1 fs-1 fw-semibold almond nameText">||</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nameText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="subscriptions/">Subscription Boxes</NavLink>
                            </li>
                            <div style={{ paddingTop: '2px' }} className="dropdown">
                                <button className="pb-2 btn btn-toggle dropdown-toggle fw-semibold"
                                    type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                    Products
                                </button>
                                <div className="dropdown-menu dropdown-menu-light dropdown-collapse" aria-labelledby="dropdownMenuButton2">
                                    <li><NavLink className="fs-4 dropdown-item" aria-current="page" to="#">Things</NavLink></li>
                                    <li><NavLink className="fs-4 dropdown-item" aria-current="page" to="#">Clothing</NavLink></li>
                                </div>
                            </div>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="signup/">Sign Up</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="checkout/">
                                    <img className='' src='./sh_cart_smol.png' width="" height="20" alt="cart gone :(" />
                                </NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            Your one stop shop for anything you might need! 💖
                        </span>
                    </div>
                </div>
            </nav>
        </>
    );
};
