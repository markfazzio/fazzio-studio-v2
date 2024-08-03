import Button, { ButtonProps } from "react-bootstrap/Button";

export default function UIButton(props: ButtonProps) {
  const { className, children, onClick, title, variant } = props;
  return (
    <Button
      className={className}
      onClick={onClick}
      title={title}
      variant={variant}
    >
      {children}
    </Button>
  );
}
