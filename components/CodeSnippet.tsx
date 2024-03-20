import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

// utils
import { slugToWords } from "@/utils/string-utils";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";

export default function CodeSnippet(props: ICodeSnippet) {
  const { title, category, description, code } = props;

  const [isCopied, setIsCopied] = useState(false);
  const CATEGORY_VARIANTS = {
    STRING: "text-bg-info text-white",
    API: "text-bg-secondary",
    ARRAY: "text-bg-primary",
    DATE: "text-bg-warning",
    NUMBER: "text-bg-success",
  };

  const getCategoryBadgeVariant = () => {
    if (!category) return;

    if (category.includes("date")) {
      return CATEGORY_VARIANTS.DATE;
    }

    if (category.includes("string")) {
      return CATEGORY_VARIANTS.STRING;
    }

    if (category.includes("array")) {
      return CATEGORY_VARIANTS.ARRAY;
    }

    if (category.includes("api")) {
      return CATEGORY_VARIANTS.API;
    }

    if (category.includes("number")) {
      return CATEGORY_VARIANTS.NUMBER;
    }
  };

  return (
    <div className="card code-snippet position-relative">
      {category ? (
        <span
          className={`badge code-snippet__category ${getCategoryBadgeVariant()} position-absolute`}
        >
          {slugToWords(category)}
        </span>
      ) : undefined}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {code ? (
          <>
            <SyntaxHighlighter
              language="typescript"
              style={docco}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
            <div className="text-end">
              <CopyToClipboard text={code} onCopy={() => setIsCopied(true)}>
                <button className="btn btn-outline-dark">Copy</button>
              </CopyToClipboard>
            </div>
          </>
        ) : undefined}
      </div>
      {isCopied ? (
        <div className="toast-container position-fixed top-0 end-0 p-3">
          <div
            className="toast show align-items-center text-bg-primary border-0"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">
                Code snippet copied to clipboard!
              </div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
                onClick={() => setIsCopied(false)}
              ></button>
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
}
