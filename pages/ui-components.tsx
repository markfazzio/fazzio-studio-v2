import { ChangeEvent, useState } from "react";
import camelcaseKeys from "camelcase-keys";

// api
import { getLandingPage } from "@/lib/api";

// components
import CodeSnippetsGrid from "@/components/CodeSnippetsGrid";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";

export default function CodeSnippets({ page }: any) {
  const pageData =
    page && page.fields && page.fields.body && page.fields.body[0];
  const headline: string =
    (pageData && pageData.fields && pageData.fields.headline) ||
    "UI Components";
  const codeSnippets: Array<ICodeSnippet> =
    pageData && pageData.fields && pageData.fields.code_snippets;
  const description: string =
    pageData && pageData.fields && pageData.fields.description;

  const [currentSnippets, setCurrentSnippets] = useState(codeSnippets || []);

  const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseValue = event.target.value.toLowerCase();
    const filteredSnippets = codeSnippets.filter((snippet) => {
      return (
        (snippet.title &&
          snippet.title.toLowerCase().includes(lowerCaseValue)) ||
        (snippet.category && snippet.category.includes(lowerCaseValue))
      );
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
                  Filter by title or category
                </label>
              </div>
            </div>
          </div>
        </div>

        <CodeSnippetsGrid codeSnippets={currentSnippets} type="accordion" />
      </section>
    </div>
  );
}

export async function getStaticProps(params: { slug: string }) {
  try {
    const page = await getLandingPage("ui-components");

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
