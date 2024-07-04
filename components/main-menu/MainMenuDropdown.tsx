import React, { memo, MouseEvent, ReactElement, useState } from "react";
import { NavDropdown } from "react-bootstrap";

import { IMainMenuDropdown, IMainMenuLinkFields } from "@/interfaces/common";
import { isAbsoluteUrl, labelToId } from "@/utils/string-utils";

const MainMenuDropdownComponent = (props: IMainMenuDropdown): ReactElement => {
  const {
    active,
    activeItemId,
    id = "main-menu-dropdown",
    items,
    label,
    onItemClick,
    // openOnHover,
    show,
    variant,
  } = props;

  const [parentDropdownShowingId, setParentDropdownShowingId] = useState("");

  const showParentDropdown = (menuId: string) => {
    setParentDropdownShowingId(menuId);
  };

  const hideParentDropdown = () => {
    setParentDropdownShowingId("");
  };

  return (
    <NavDropdown
      active={active}
      menuVariant={variant}
      onClick={() => {
        if (parentDropdownShowingId === id) {
          hideParentDropdown();
        }
        showParentDropdown(id);
      }}
      title={label}
      id={id}
      show={show}
      // onMouseEnter={openOnHover ? () => showParentDropdown(id) : undefined}
      // onSelect={hideParentDropdown}
      // onMouseLeave={openOnHover ? () => hideParentDropdown() : undefined}
    >
      {items && items.length ? (
        <>
          {items.map((item: IMainMenuLinkFields, index: number) => (
            <NavDropdown.Item
              key={`item-${index}--${labelToId(item.label || "no-id")}`}
              onClick={(event: MouseEvent<HTMLDivElement>) => {
                if (onItemClick) onItemClick(event);
              }}
              href={item.url}
              target={isAbsoluteUrl(item.url) ? "_blank" : undefined}
              active={activeItemId === labelToId(item.label || "")}
            >
              {item.label}
            </NavDropdown.Item>
          ))}
        </>
      ) : undefined}
    </NavDropdown>
  );
};

export const MainMenuDropdown = memo<IMainMenuDropdown>(
  MainMenuDropdownComponent
);
