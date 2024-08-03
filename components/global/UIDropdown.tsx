import { ReactNode } from "react";
import { DropdownItemProps, Form } from "react-bootstrap";
import Dropdown, { DropdownProps } from "react-bootstrap/Dropdown";
import { Variant } from "react-bootstrap/esm/types";
import UIButton from "./UIButton";
import { IconClear } from "./IconClear";

interface UIDropdownItemProps extends DropdownItemProps {
  label: string | ReactNode;
  value?: string;
}

interface UIDropdownProps extends Omit<DropdownProps, "children"> {
  items: Array<UIDropdownItemProps>;
  label?: string | ReactNode;
  onClear?: () => void;
  placeholder?: string;
  size?: "sm" | "lg";
  value?: string;
  variant?: Variant;
}

export const UIDropdown = (props: UIDropdownProps) => {
  const {
    className,
    id,
    items,
    label,
    onClear,
    onSelect,
    placeholder = "Select",
    size,
    value,
    variant,
  } = props;

  const getItemByValue = (): UIDropdownItemProps | undefined => {
    return items.find((item: UIDropdownItemProps) => {
      return item.value && item.value === value;
    });
  };

  const dropdownItem = value ? getItemByValue() : null;
  const dropdownValueLabel =
    (dropdownItem && dropdownItem.label) || placeholder;

  return (
    <>
      <div className="d-flex">
        <Form.Label htmlFor={id}>{label}</Form.Label>
        {value ? (
          <UIButton
            title="Clear Filters"
            variant="link"
            className="m-0 p-0 ms-auto text-decoration-none"
            onClick={onClear}
          >
            <IconClear />
          </UIButton>
        ) : undefined}
      </div>

      <Dropdown onSelect={onSelect} id={id}>
        <Dropdown.Toggle variant={variant} size={size} className={className}>
          {dropdownValueLabel}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items && items.length
            ? items.map((item: UIDropdownItemProps, index: number) => (
                <Dropdown.Item
                  eventKey={item.value}
                  key={`${item.value}-item-${index}`}
                >
                  {item.label}
                </Dropdown.Item>
              ))
            : undefined}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
