// interfaces
import { IMainMenuLink } from "@/interfaces/common";

export default function MainMenuLink(props: IMainMenuLink) {
  const { url, label, active, onClick } = props;

  const urlIsAbsolute = url && url.includes("http");
  const relativeUrl = url ? `/${url}` : "";
  const finalUrl = urlIsAbsolute ? url : relativeUrl;

  return (
    <li className="nav-item" onClick={onClick}>
      <a
        className={`nav-link page-scroll ${active ? "active" : ""}`}
        href={finalUrl}
        target={urlIsAbsolute ? "_blank" : undefined}
      >
        {label}
      </a>
    </li>
  );
}
