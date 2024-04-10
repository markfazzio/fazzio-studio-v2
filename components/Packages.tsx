// interfaces
// import { IAuthor } from "@/interfaces/common";

// interface AuthorCardProps {
//   author: IAuthor;
// }

export default function Packages() {
  // const { author } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title mb-4">
            <h2>Packages / Toolkits</h2>
            <p>
              Some useful packages I have put together to streamline
              development.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-3">
          <a
            href="https://github.com/markfazzio/bootstrap-ui-kit"
            target="_blank"
            className="text-primary"
          >
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title fw-bold text-primary">
                  bootstrap-ui-kit
                </div>
                <div className="card-text">
                  Starter component library template using Rollup, Bootstrap,
                  react-bootstrap, &amp; Storybook.
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 mb-3">
          <a
            href="https://github.com/markfazzio/gatsby-starter-tailwind"
            target="_blank"
            className="text-primary"
          >
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title fw-bold text-primary">
                  gatsby-starter-tailwind
                </div>
                <div className="card-text">
                  Starter Gatsby template with Typescript support, Tailwind
                  integration, theme switching, etc.
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 mb-3">
          <a
            href="https://github.com/markfazzio/node-express-api-starter"
            target="_blank"
            className="text-primary"
          >
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title fw-bold text-primary">
                  node-express-api-starter
                </div>
                <div className="card-text">
                  Starter API using Express, with CORS support, error handling,
                  filtering, and pagination.
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
