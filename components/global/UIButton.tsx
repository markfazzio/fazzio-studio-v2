import Button, { ButtonProps } from "react-bootstrap/Button";

export default function UIButton(props: ButtonProps) {
  const { children, onClick, variant } = props;
  return (
    <Button onClick={onClick} variant={variant}>
      {children}
    </Button>
  );
}
