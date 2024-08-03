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
              {isAbsoluteUrl(item.url) ? (
                <svg
                  className="ms-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 5H8.2c-1.12 0-1.68 0-2.108.218a1.999 1.999 0 0 0-.874.874C5 6.52 5 7.08 5 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.427.218.987.218 2.105.218h7.606c1.118 0 1.677 0 2.104-.218.377-.192.683-.498.875-.874.218-.428.218-.987.218-2.105V14m1-5V4m0 0h-5m5 0-7 7"
                  />
                </svg>
              ) : undefined}
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
