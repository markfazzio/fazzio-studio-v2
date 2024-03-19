import CodeSnippet from "./code-snippet";

export default function CodeSnippets({
  headline,
  description,
  code_snippets,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-10">
            <div className="section-title mb-60">
              <h2 className="mb-20">{headline}</h2>
              <p>{description}</p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row">
              {code_snippets.map((feature, index) => (
                <CodeSnippet
                  key={index}
                  headline={feature.headline}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
