import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <div href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom ">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top">
                <li className="nav-item">
                    <NavLink className="link-dark text-decoration-none" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="link-dark text-decoration-none" to="/">
                        About Us
                    </NavLink>
                </li>
                <li className="nav-link px-2 text-muted">Connect: </li>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/"
                            className="dropdown-item">
                            Morgan Lyle
                        </a>
                        <a href="https://www.linkedin.com/"
                            className="dropdown-item">
                            Nellie Nelson
                        </a>
                        <a href="https://www.linkedin.com/"
                            className="dropdown-item">
                            Adrian Dorado
                        </a>
                        <a href="https://www.linkedin.com/"
                            className="dropdown-item">
                            Evan Wu
                        </a>
                    </li>
                </ul>
            </footer >
        </div>


    );
}

export default Footer;
