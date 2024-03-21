import { ToastProps } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function UIToast(props: ToastProps) {
  const { autohide = true, children, onClose, show } = props;
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast
        autohide={autohide}
        onClose={onClose}
        show={show}
        delay={3000}
        bg="info"
      >
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
