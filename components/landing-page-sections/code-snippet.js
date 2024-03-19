import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeSnippet({ title, description, code }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <SyntaxHighlighter language="typescript" style={docco}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
