import { useState, useRef } from "react";
import { useRouter } from "next/router";

import MainMenuLink from "./MainMenuLink";
import { IMainMenuLink } from "@/interfaces/common";

interface MainMenuProps {
  links?: Array<IMainMenuLink>;
}

export default function MainMenu(props: MainMenuProps) {
  const { links } = props;
  const [isMenuActive, setMenuActive] = useState(false);
  const [activeMenuLink, setActiveMenuLink] = useState("");
  const menuLinksEl: any = useRef(null);
  const router = useRouter();
  const pageSlug = router.asPath.replace("/", "");

  function deactivateMenu() {
    setMenuActive(false);
    if (menuLinksEl.current) {
      menuLinksEl.current.classList.remove("show");
    }
  }

  return (
    <>
      <button
        className={`navbar-toggler ${isMenuActive ? "active" : ""}`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={() => setMenuActive(!isMenuActive)}
      >
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
        <span className="toggler-icon"></span>
      </button>

      <div
        className={`collapse navbar-collapse sub-menu-bar ${
          isMenuActive ? "show" : ""
        }`}
        ref={menuLinksEl}
        id="navbarSupportedContent"
      >
        <div className="ms-auto">
          <ul id="nav" className="navbar-nav ms-auto">
            {links && links.length
              ? links.map((navLink: IMainMenuLink) => (
                  <MainMenuLink
                    key={navLink.url}
                    url={navLink.url}
                    label={navLink.label}
                    active={
                      navLink.url === pageSlug || navLink.url === activeMenuLink
                    }
                    onClick={deactivateMenu}
                  />
                ))
              : undefined}
            <li className="nav-item">
              <a
                className="nav-link lh-1"
                href="https://www.linkedin.com/in/markmfazzio/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 310 310"
                >
                  <path d="M72.16 99.73H9.927a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5H72.16a5 5 0 0 0 5-5V104.73a5 5 0 0 0-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 0 0-5-5h-59.599a5 5 0 0 0-5 5v199.928a5 5 0 0 0 5 5h62.097a5 5 0 0 0 5-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 0 0 5 5H305a5 5 0 0 0 5-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" />
                </svg>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link lh-1"
                href="https://github.com/markfazzio"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width={24}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                >
                  <g data-name="Layer 2">
                    <g fill="none" data-name="invisible box">
                      <path d="M0 0h48v48H0z" />
                      <path d="M0 0h48v48H0z" />
                    </g>
                    <path
                      d="M24 1.9a21.6 21.6 0 0 0-6.8 42.2c1 .2 1.8-.9 1.8-1.8v-2.9c-6 1.3-7.9-2.9-7.9-2.9a6.5 6.5 0 0 0-2.2-3.2c-2-1.4.1-1.3.1-1.3a4.3 4.3 0 0 1 3.3 2c1.7 2.9 5.5 2.6 6.7 2.1a5.4 5.4 0 0 1 .5-2.9C12.7 32 9 28 9 22.6a10.7 10.7 0 0 1 2.9-7.6 6.2 6.2 0 0 1 .3-6.4 8.9 8.9 0 0 1 6.4 2.9 15.1 15.1 0 0 1 5.4-.8 17.1 17.1 0 0 1 5.4.7 9 9 0 0 1 6.4-2.8 6.5 6.5 0 0 1 .4 6.4 10.7 10.7 0 0 1 2.8 7.6c0 5.4-3.7 9.4-10.5 10.6a5.4 5.4 0 0 1 .5 2.9v6.2a1.8 1.8 0 0 0 1.9 1.8A21.7 21.7 0 0 0 24 1.9Z"
                      data-name="icons Q2"
                    />
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
