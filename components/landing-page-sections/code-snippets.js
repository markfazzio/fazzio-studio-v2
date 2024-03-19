import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import CodeSnippet from "./code-snippet";

export default function CodeSnippets({
  headline,
  description,
  codeSnippets,
  scrollAnchorId,
}) {
  const [currentSnippets, setCurrentSnippets] = useState(codeSnippets || []);

  const onFilterChange = (event) => {
    console.log(event.target.value);
    const filteredSnippets = codeSnippets.filter((snippet) => {
      return snippet.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    setCurrentSnippets(filteredSnippets);
  };

  return (
    <section
      id={scrollAnchorId || "ts-snippets"}
      className="feature-section bg-dark py-5"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-light mb-5">
              <h2 className="mb-3">{headline || "Typescript Snippets"}</h2>
              <p>
                {description ||
                  "Useful pieces of code for use in your own app."}
              </p>
            </div>

            <div class="form-floating mb-3">
              <input
                type="email"
                className="form-control form-control-lg"
                id="snippetFilter"
                onChange={onFilterChange}
                placeholder="e.g. FizzBuzz"
              />
              <label for="snippetFilter">Filter snippets by title...</label>
            </div>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 1023: 3, 1408: 3 }}
            >
              <Masonry gutter="15px">
                {currentSnippets && currentSnippets.length ? (
                  currentSnippets.map((code_snippet, index) => (
                    <CodeSnippet
                      key={index}
                      title={code_snippet.title}
                      description={code_snippet.description}
                      code={code_snippet.code}
                    />
                  ))
                ) : (
                  <div className="text-light">No snippets found.</div>
                )}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
    </section>
  );
}
