// import { ChangeEvent, useState } from "react";
import camelcaseKeys from "camelcase-keys";
import { Octokit } from "octokit";

// api
import { getLandingPage } from "@/lib/api";

// components
// import CodeSnippetsGrid from "@/components/CodeSnippetsGrid";

// interfaces
import Packages from "@/components/Packages";
import { GITHUB_USERNAME } from "constants/common";
import { useEffect, useState } from "react";
import { IGitHubRepo } from "@/interfaces/common";
import { Badge, Card } from "react-bootstrap";

export default function CodeSnippets({ page }: any) {
  const [reposData, setReposData] = useState<Array<IGitHubRepo>>([]);

  // const [currentSnippets, setCurrentSnippets] = useState(codeSnippets || []);

  // const onFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const lowerCaseValue = event.target.value.toLowerCase();
  //   const filteredSnippets = codeSnippets.filter((snippet) => {
  //     return (
  //       (snippet.title &&
  //         snippet.title.toLowerCase().includes(lowerCaseValue)) ||
  //       (snippet.category && snippet.category.includes(lowerCaseValue))
  //     );
  //   });
  //   setCurrentSnippets(filteredSnippets);
  // };

  const octokit = new Octokit({
    auth: process.env.NEXT_GITHUB_PERSONAL_ACCESS_TOKEN,
  });

  const getGitHubRepos = async () => {
    try {
      const reposDataRequest = await octokit.request(
        "GET /users/{username}/repos",
        {
          username: GITHUB_USERNAME,
          headers: {
            "X-GitHub-Api-Version": "2022-11-28",
          },
        }
      );

      if (reposDataRequest && reposDataRequest.data) {
        setReposData(reposDataRequest.data);
      }

      console.log(reposData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGitHubRepos();
  }, []);

  return (
    <div className="page page-code-snippets">
      <section id="code-packages" className="py-5 bg-heavy-rain">
        <Packages />
      </section>
      {reposData && reposData.length ? (
        <section id="github-repos" className="py-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col">
                <h2>All Public GitHub Repos</h2>
                Check out all of my existing github projects below, ranging from
                games, to cheat sheets for TypeScript/JavaScript, static site
                generator framework kits, and more!
              </div>
            </div>
            <div className="row">
              {reposData.map((repo: IGitHubRepo, index: number) => (
                <div
                  className="col-lg-6 mb-3"
                  key={`repo-${index}-${repo.name}`}
                >
                  <Card>
                    <Card.Body>
                      <Card.Title>{repo.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {repo.full_name}
                      </Card.Subtitle>
                      <Card.Text>{repo.description}</Card.Text>
                      <Card.Link
                        className="btn btn-primary"
                        target="_blank"
                        href={repo.html_url}
                      >
                        View On GitHub
                      </Card.Link>
                    </Card.Body>
                    <Badge className="position-absolute end-0">
                      {repo.language}
                    </Badge>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : undefined}
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
