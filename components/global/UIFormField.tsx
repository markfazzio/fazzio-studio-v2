import { ReactNode } from "react";
import { FloatingLabel, Form, FormControlProps } from "react-bootstrap";

interface UIFormFieldProps extends FormControlProps {
  helpText?: string;
  label?: string | ReactNode;
}

export default function UIFormField(props: UIFormFieldProps) {
  const { className, helpText, id, label, onChange, placeholder, size, type } =
    props;
  return (
    <>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        className={className}
        id={id}
        size={size}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
      />
      {helpText && <Form.Text muted>{helpText}</Form.Text>}
    </>
  );
}
