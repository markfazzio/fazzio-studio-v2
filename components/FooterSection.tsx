import Image from "next/image";

import { IMainMenuLink } from "@/interfaces/common";

interface FooterSectionProps {
  mainMenu?: Array<IMainMenuLink>;
}

export default function FooterSection(props: FooterSectionProps) {
  const { mainMenu } = props;
  const links =
    mainMenu && mainMenu.length
      ? mainMenu.map((link: IMainMenuLink) => ({
          ...link,
          url:
            link && link.url && link.url[0] === "#" ? `/${link.url}` : link.url,
        }))
      : [];

  return (
    <footer className="footer py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">Updated: 4.8.24</div>
          <div className="col ms-auto">
            <div className="footer-widget">
              <div className="logo d-flex align-items-center justify-content-end">
                <span className="me-2">Built With</span>
                <a href="https://buttercms.com" target="_blank">
                  <Image
                    width={200}
                    height={50}
                    src="https://cdn.buttercms.com/PBral0NQGmmFzV0uG7Q6"
                    alt="logo"
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
