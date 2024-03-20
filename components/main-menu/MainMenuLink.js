export default function MainMenuLink({ url, label, active, callbackOnClick }) {
  return (
    <li className="nav-item" onClick={callbackOnClick}>
      <a
        className={`nav-link page-scroll ${active ? "active" : ""}`}
        href={`/${url}`}
      >
        {label}
      </a>
    </li>
  );
}
