import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <div href="/" className="d-flex align-items-center pb-2 mb-2 link-dark text-decoration-none bbcolor_bottom heliotrope_gray">
                <NavLink className="link-dark text-decoration-none" to="/">
                    <span className="ms-3 mb-2 fs-2 fw-semibold nameText">Impulse</span>
                </NavLink>
                <span className="ms-2 fs-1 fw-semibold nameText almond">||</span>
                <span className="ms-1 mt-2 fs-4 fw-semibold nameText">The place for all your random needs! </span>
                <NavLink to="/" className="ms-auto link-dark text-decoration-">
                    <button className="btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        Home
                    </button>
                </NavLink>
                <NavLink className="link-dark text-decoration-none" to="subscriptions/">
                    <button className="btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        Subscription Boxes
                    </button>
                </NavLink>
                <div className="dropdown">
                    <button className="btn btn-toggle rounded border-0 dropdown-toggle fs-2 fw-semibold nameText"
                        type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false"
                        >
                        Products
                    </button>
                    <div className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                        <li><NavLink className="fs-4 dropdown-item nameText" aria-current="page" to="#">Things</NavLink></li>
                        <li><NavLink className="fs-4 dropdown-item nameText" aria-current="page" to="#">Clothing</NavLink></li>
                    </div>
                </div>
                <NavLink className="link-dark text-decoration-none" to="/signup">
                    <button className="btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        Sign Up
                    </button>
                </NavLink>
            </div>
        </>
    )
}
