import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// components
import CodeSnippet from "@/components/CodeSnippet";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";

interface CodeSnippetsGridProps {
  codeSnippets: Array<ICodeSnippet>;
}

export default function CodeSnippetsGrid(props: CodeSnippetsGridProps) {
  const { codeSnippets } = props;

  return (
    <>
      {codeSnippets && codeSnippets.length ? (
        <div className="container-fluid">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 1023: 2, 1408: 3 }}
          >
            <Masonry gutter="15px">
              {codeSnippets.map((codeSnippet: ICodeSnippet, index: number) => (
                <CodeSnippet
                  key={`code-snippet-${index}`}
                  title={codeSnippet.title}
                  description={codeSnippet.description}
                  code={codeSnippet.code}
                  category={codeSnippet.category}
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
