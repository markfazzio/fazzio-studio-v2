import { useEffect, useState, useRef } from "react";

import MainMenu from "./main-menu/MainMenu";
import { IMainMenuLink } from "@/interfaces/common";

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
        className={`navbar-area ${isNavbarSticky ? "sticky" : ""}`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg">
                <a
                  className="navbar-brand text-primary fs-3"
                  href="https://markfazzio.com"
                >
                  <strong>markfazzio</strong>
                </a>
                <MainMenu links={mainMenu} />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
