import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

// utils
import { slugToWords } from "@/utils/string-utils";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";
import UIButton from "./global/UIButton";
import UIToast from "./global/UIToast";

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

  function createMarkup(): any {
    return { __html: description };
  }

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
        <div className="card-text" dangerouslySetInnerHTML={createMarkup()} />
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
                <UIButton variant="outline-dark">Copy</UIButton>
              </CopyToClipboard>
            </div>
          </>
        ) : undefined}
      </div>
      <UIToast show={isCopied} onClose={() => setIsCopied(false)}>
        Code snippet copied to clipboard!
      </UIToast>
    </div>
  );
}
