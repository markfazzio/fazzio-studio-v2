// interfaces
import { ISection } from "@/interfaces/common";

interface ResumeSectionProps extends ISection {
  description?: string;
  resume?: string;
}

export default function ResumeSection(props: ResumeSectionProps) {
  const { headline, description, resume, scrollAnchorId } = props;

  function createMarkup(): any {
    return { __html: resume };
  }

  return (
    <section id={scrollAnchorId} className="resume-section bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="section-title d-flex mb-4">
              <h2 className="mb-0 me-3">{headline || "Resume"}</h2>
              <a
                href={`https://markfazzio.com/mark-fazzio-resume-2024.pdf`}
                className="btn btn-primary ms-auto"
                target="_blank"
                rel="noreferrer"
              >
                Download PDF
              </a>
            </div>
            <div className="section-title mb-5">
              <h2 className="mb-3"></h2>
              <p>{description || "View latest resume."}</p>
              {resume ? (
                <div
                  className="resume-content"
                  dangerouslySetInnerHTML={createMarkup()}
                />
              ) : undefined}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
