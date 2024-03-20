import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";

import { slugToWords } from "utils/string-utils";

export default function CodeSnippet({ title, category, description, code }) {
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
          class={`badge code-snippet__category ${getCategoryBadgeVariant()} position-absolute`}
        >
          {slugToWords(category)}
        </span>
      ) : undefined}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <SyntaxHighlighter language="typescript" style={docco} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
