import Spinner from "react-bootstrap/Spinner";

export default function LoadingSpinner() {
  return (
    <div className="position-fixed w-100 h-100 top-0 left-0 bg-white d-flex justify-content-center align-items-center">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
