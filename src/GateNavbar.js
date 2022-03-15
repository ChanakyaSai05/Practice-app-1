import React from "react";
import "./Style.css";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#1d0287" }}
    >
      <div className="container">
        <div className="row">
          <div className="container-fluid ">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-0 mb-lg-0">
                <li className="nav-item px-4 ">
                  <a className="nav-link active " aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    GATE 2022 PAPERS
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    DOWNLOAD INFORMATION
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    OLD QUESTION PAPERS
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    EXAM CITIES
                  </a>
                </li>

                <li className="nav-item dropdown px-2">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    REGISTRATION
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Eligibility Criteria
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Two Paper Combinations
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Documents required for filling the application
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Application Fees
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                  </ul>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    FAQS
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

// <li className="nav-item dropdown">
// <a
//   className="nav-link dropdown-toggle"
//   href="#"
//   id="navbarDropdown"
//   role="button"
//   data-toggle="dropdown"
//   aria-haspopup="true"
//   aria-expanded="false"
// >
//   REGISTRATION
// </a>
// <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//   <a className="dropdown-item" href="#">
//     Eligibility Criteria
//   </a>
//   <div className="dropdown-divider"></div>
//   <a className="dropdown-item" href="#">
//     Two Paper Combinations
//   </a>
//   <div className="dropdown-divider"></div>
//   <a className="dropdown-item" href="#">
//     Documents required for filling the application
//   </a>
//   <div className="dropdown-divider"></div>
//   <a className="dropdown-item" href="#">
//     Application Fees
//   </a>
// </div>
// </li>
