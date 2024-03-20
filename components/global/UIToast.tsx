import { ToastProps } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default function UIToast(props: ToastProps) {
  // const {children} = props;
  return (
    <ToastContainer className="position-static">
      <Toast>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
