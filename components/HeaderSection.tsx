import { useEffect, useState, useRef } from "react";

import MainMenu from "./main-menu/MainMenu";
import { IMainMenuLink } from "@/interfaces/common";
import { Nav, NavbarBrand } from "react-bootstrap";

interface HeaderSectionProps {
  mainMenu?: Array<IMainMenuLink>;
}

export default function HeaderSection(props: HeaderSectionProps) {
  const { mainMenu } = props;
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navbarAreaEl: any = useRef(null);

  function fixNavBar() {
    if (navbarAreaEl.current) {
      setIsNavbarSticky(window.pageYOffset > navbarAreaEl.current.offsetTop);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", fixNavBar);

    return () => {
      window.removeEventListener("scroll", fixNavBar);
    };
  }, []);

  return (
    <header className="header">
      <div
        ref={navbarAreaEl}
        className={`navbar-area d-flex align-items-center ${
          isNavbarSticky ? "sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <Nav className="navbar navbar-expand-lg p-0">
                <NavbarBrand
                  className="text-primary fs-3"
                  href="https://markfazzio.com"
                >
                  <strong>markfazzio</strong>
                </NavbarBrand>
                <MainMenu links={mainMenu} />
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
