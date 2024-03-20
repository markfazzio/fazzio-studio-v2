import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import CodeSnippet from "@/components/CodeSnippet";

export default function CodeSnippetsGrid({ codeSnippets }) {
  return (
    <>
      {codeSnippets && codeSnippets.length ? (
        <div className="container-fluid">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 1023: 2, 1408: 3 }}
          >
            <Masonry gutter="15px">
              {codeSnippets.map((code_snippet, index) => (
                <CodeSnippet
                  key={index}
                  title={code_snippet.title}
                  description={code_snippet.description}
                  code={code_snippet.code}
                  category={code_snippet.category}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col">No results.</div>
          </div>
        </div>
      )}
    </>
  );
}
