export default function Resume({
  headline,
  description,
  resume,
  scrollAnchorId,
}) {
  function createMarkup() {
    return { __html: resume };
  }

  return (
    <section id={scrollAnchorId} className="resume-section bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="section-title mb-5">
              <h2 className="mb-3">{headline || "Resume"}</h2>
              <p>{description || "View latest resume."}</p>
              <div
                className="resume-content"
                dangerouslySetInnerHTML={createMarkup()}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
