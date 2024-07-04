import { Nav } from "react-bootstrap";

// interfaces
import { IMainMenuLink } from "@/interfaces/common";
import { isAbsoluteUrl } from "@/utils/string-utils";

export default function MainMenuLink(props: IMainMenuLink) {
  const { url, children, label, active, onClick } = props;

  const relativeUrl = url ? `/${url}` : "";
  const finalUrl = isAbsoluteUrl(url) ? url : relativeUrl;

  return (
    <Nav.Link
      target={isAbsoluteUrl(url) ? "_blank" : undefined}
      className={`nav-link page-scroll ${active ? "active" : ""}`}
      href={finalUrl}
      onClick={onClick}
    >
      {label || children}
    </Nav.Link>
  );
}
