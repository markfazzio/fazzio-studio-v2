import { ChangeEvent, useState } from "react";
import camelcaseKeys from "camelcase-keys";

// api
import { getLandingPage } from "@/lib/api";

// components
import CodeSnippetsGrid from "@/components/CodeSnippetsGrid";
import UIFormField from "@/components/global/UIFormField";
import { UIDropdown } from "@/components/global/UIDropdown";

// interfaces
import { ICodeSnippet } from "@/interfaces/common";
import { CODE_SNIPPET_CATEGORIES } from "constants/common";
import { getCategoryBadgeVariant } from "@/utils/template-utils";

export default function CodeSnippets({ page }: any) {
  const pageData =
    page && page.fields && page.fields.body && page.fields.body[0];
  const headline: string =
    (pageData && pageData.fields && pageData.fields.headline) ||
    "Code Snippets";
  const codeSnippets: Array<ICodeSnippet> =
    pageData && pageData.fields && pageData.fields.code_snippets;
  const description: string =
    pageData && pageData.fields && pageData.fields.description;

  const [currentSnippets, setCurrentSnippets] = useState<Array<any>>(
    codeSnippets || []
  );
  const [currentSnippetCategory, setCurrentSnippetCategory] =
    useState<string>("");

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

  const onCategorySelect = (eventKey: string | null) => {
    if (eventKey) {
      setCurrentSnippetCategory(eventKey);
      const filteredSnippets = codeSnippets.filter((snippet) => {
        return snippet.category && snippet.category.includes(eventKey);
      });
      setCurrentSnippets(filteredSnippets);
    } else {
      setCurrentSnippetCategory("");
    }
  };

  const onCategoryClear = () => {
    setCurrentSnippetCategory("");
    setCurrentSnippets(codeSnippets);
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
          <div className="row mb-3">
            <div className="col-md-4 col-md-offset-3">
              <UIFormField
                id="snippetFilter"
                label="Search Snippets"
                onChange={onFilterChange}
                placeholder="e.g. FizzBuzz"
                size="lg"
                className="mb-3 mb-md-0"
              />
            </div>
            <div className="col-md-4 col-lg-3">
              <UIDropdown
                className="w-100 d-flex justify-content-between align-items-center"
                label="Filter By Category"
                items={CODE_SNIPPET_CATEGORIES}
                onClear={onCategoryClear}
                onSelect={onCategorySelect}
                placeholder="Select Category"
                size="lg"
                value={currentSnippetCategory}
                variant={
                  currentSnippetCategory
                    ? getCategoryBadgeVariant(currentSnippetCategory)
                    : "outline-secondary"
                }
              />
            </div>
          </div>
        </div>

        <CodeSnippetsGrid codeSnippets={currentSnippets} />
      </section>
    </div>
  );
}

export async function getStaticProps(params: { slug: string }) {
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
