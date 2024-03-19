export default function CodeSnippet({ title, description, code }) {
  return (
    <div className="col-lg-6 col-md-6">
      <div className="single-feature">
        <div className="feature-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <pre>{code}</pre>
        </div>
      </div>
    </div>
  );
}
