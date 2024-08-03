import { useState } from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Badge } from "react-bootstrap";

// utils
import { slugToWords } from "@/utils/string-utils";
import { getCategoryBadgeVariant, isLightText } from "@/utils/template-utils";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";

// coimponents
import UIButton from "@/components/global/UIButton";
import UIToast from "@/components/global/UIToast";

export default function CodeSnippet(props: ICodeSnippet) {
  const {
    title,
    category,
    copyButtonLocation = "bottom",
    description,
    code,
  } = props;

  const [isCopied, setIsCopied] = useState(false);

  const categoryVariant = category
    ? getCategoryBadgeVariant(category)
    : undefined;

  function createMarkup(): any {
    return { __html: description };
  }

  return (
    <div className="card code-snippet position-relative">
      {category ? (
        <Badge
          className="position-absolute code-snippet__category"
          bg={categoryVariant}
          text={
            categoryVariant && isLightText(categoryVariant) ? "light" : "dark"
          }
        >
          {slugToWords(category)}
        </Badge>
      ) : undefined}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div
          className="card-text mb-3"
          dangerouslySetInnerHTML={createMarkup()}
        />
        {code ? (
          <div className="card-code position-relative">
            {copyButtonLocation === "top" ? (
              <div className="position-absolute top-0 end-0 me-3 mt-3">
                <CopyToClipboard text={code} onCopy={() => setIsCopied(true)}>
                  <UIButton variant="secondary">Copy</UIButton>
                </CopyToClipboard>
              </div>
            ) : undefined}
            <SyntaxHighlighter
              language="typescript"
              style={docco}
              showLineNumbers
            >
              {code}
            </SyntaxHighlighter>
            {copyButtonLocation === "bottom" ? (
              <div className="text-end">
                <CopyToClipboard text={code} onCopy={() => setIsCopied(true)}>
                  <UIButton variant="outline-dark">Copy</UIButton>
                </CopyToClipboard>
              </div>
            ) : undefined}
          </div>
        ) : undefined}
      </div>
      <UIToast show={isCopied} onClose={() => setIsCopied(false)}>
        Code snippet copied to clipboard!
      </UIToast>
    </div>
  );
}
