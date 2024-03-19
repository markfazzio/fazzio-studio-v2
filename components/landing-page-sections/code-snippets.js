import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CodeSnippet from "./code-snippet";

export default function CodeSnippets({
  headline,
  description,
  codeSnippets,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId || "ts-snippets"} className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title mb-60">
              <h2 className="mb-20">{headline || "Typescript Snippets"}</h2>
              <p>
                {description ||
                  "Useful pieces of code for use in your own app."}
              </p>
            </div>
          </div>

          <div className="col-12">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 1023: 3, 1408: 4 }}
            >
              <Masonry gutter="15px">
                {codeSnippets && codeSnippets.length
                  ? codeSnippets.map((code_snippet, index) => (
                      <CodeSnippet
                        key={index}
                        title={code_snippet.title}
                        description={code_snippet.description}
                        code={code_snippet.code}
                      />
                    ))
                  : undefined}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
}
