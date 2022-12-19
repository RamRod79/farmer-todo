function Footer() {
    return (
        <footer className="footer">
            <nav className="navbar fixed-bottom navbar-expand-sm bg-dark">
                <div className="container d-flex justify-content-center">
                        <ul className="navbar-nav me-auto ms-auto mb-3 flex-row  mb-lg-0 ">
                            <li className="nav-item me-2">
                                <a className="nav-link active" href="#" target="_blank" ><i className="fa-brands fa-github fa-xl"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link active" href="#" target="_blank" ><i className="fa-brands fa-linkedin fa-xl"></i></a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link active" href="#" target="_blank" ><i className="fa-brands fa-twitter fa-xl"></i></a>
                            </li>
                        </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer;