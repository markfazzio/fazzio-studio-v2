import Link from "next/link";

import camelcaseKeys from "camelcase-keys";

import { getLandingPage } from "@/lib/api";
import CodeSnippetsGrid from "@/components/CodeSnippetsGrid";
import { useState } from "react";

export default function CodeSnippets({ page }) {
  const pageData =
    page && page.fields && page.fields.body && page.fields.body[0];
  const headline =
    (pageData && pageData.fields && pageData.fields.headline) ||
    "Code Snippets";
  const codeSnippets =
    pageData && pageData.fields && pageData.fields.code_snippets;
  const description =
    pageData && pageData.fields && pageData.fields.description;

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
    <div className="page page-code-snippets">
      <section id="code-snippets" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title mb-4">
                <h2>{headline}</h2>
                {description ? <p>{description}</p> : undefined}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="snippetFilter"
                  onChange={onFilterChange}
                  placeholder="e.g. FizzBuzz"
                />
                <label htmlFor="snippetFilter">
                  Filter snippets by title...
                </label>
              </div>
            </div>
          </div>
        </div>

        <CodeSnippetsGrid codeSnippets={currentSnippets} />
      </section>
    </div>
  );
}

export async function getStaticProps({ params }) {
  try {
    const page = await getLandingPage("code-snippets");

    return {
      props: { page: camelcaseKeys(page) },
    };
  } catch (e) {
    console.error(`Couldn't load content for Landing page ${params.slug}.`, e);

    return {
      notFound: true,
    };
  }
}
