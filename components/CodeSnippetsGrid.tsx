import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Accordion from "react-bootstrap/Accordion";

// components
import CodeSnippet from "@/components/CodeSnippet";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";

interface CodeSnippetsGridProps {
  codeSnippets: Array<ICodeSnippet>;
  type?: "accordion" | "grid";
}

export default function CodeSnippetsGrid(props: CodeSnippetsGridProps) {
  const { codeSnippets, type = "grid" } = props;

  return (
    <>
      {codeSnippets && codeSnippets.length ? (
        <>
          {type === "accordion" ? (
            <div className="container">
              <div className="row">
                <div className="col">
                  <Accordion>
                    {codeSnippets.map(
                      (codeSnippet: ICodeSnippet, index: number) => (
                        <Accordion.Item
                          eventKey={index.toString()}
                          key={`accordion-code-snippet-${index}`}
                        >
                          <Accordion.Header>
                            {codeSnippet.title}
                          </Accordion.Header>
                          <Accordion.Body>
                            <CodeSnippet
                              key={`code-snippet-${index}`}
                              title={codeSnippet.title}
                              description={codeSnippet.description}
                              code={codeSnippet.code}
                              category={codeSnippet.category}
                              copyButtonLocation="top"
                            />
                          </Accordion.Body>
                        </Accordion.Item>
                      )
                    )}
                  </Accordion>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-fluid">
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 1023: 2, 1408: 3 }}
              >
                <Masonry gutter="15px">
                  {codeSnippets.map(
                    (codeSnippet: ICodeSnippet, index: number) => (
                      <CodeSnippet
                        key={`code-snippet-${index}`}
                        title={codeSnippet.title}
                        description={codeSnippet.description}
                        code={codeSnippet.code}
                        category={codeSnippet.category}
                      />
                    )
                  )}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          )}
        </>
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
