// interfaces
import { IMainMenuLink } from "@/interfaces/common";

export default function MainMenuLink(props: IMainMenuLink) {
  const { url, label, active, onClick } = props;

  return (
    <li className="nav-item" onClick={onClick}>
      <a
        className={`nav-link page-scroll ${active ? "active" : ""}`}
        href={`/${url}`}
      >
        {label}
      </a>
    </li>
  );
}
