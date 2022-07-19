import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <div href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom ">
                <NavLink className="link-dark text-decoration-none" to="/">
                    <div>
                        <img className="pt-2 ms-1" src="./bun_logo_smol.png" width="" height="80" alt="no bun :(" />
                    </div>
                </NavLink>
                <span className="ms-3 mb-2 fs-2 fw-semibold nameText">Impulse</span>
                <span className="ms-1 fs-1 fw-semibold nameText csep">||</span>
                <span className="ms-1 mt-2 fs-4 fw-semibold nameText">The place for all your random needs! </span>
                <NavLink to="/" className="ms-auto link-dark text-decoration-none">
                    <button className="btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        Home
                    </button>
                </NavLink>
                <div className="dropdown">
                    <button className="btn btn-toggle rounded border-0 dropdown-toggle fs-2 fw-semibold nameText" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                    </button>
                    <div className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownMenuButton2">
                        <li><NavLink className="fs-4 dropdown-item nameText" aria-current="page" to="finished-projects/">Finished Projects</NavLink></li>
                        <li><NavLink className="fs-4 dropdown-item nameText" aria-current="page" to="ongoing-projects/">Ongoing Projects</NavLink></li>
                    </div>
                </div>
                <NavLink className="link-dark text-decoration-none" to="links/">
                    <button className="btn btn-toggle rounded border-0 collapsed fs-2 fw-semibold nameText">
                        About Us
                    </button>
                </NavLink>
            </div>
        </>
    )
}
