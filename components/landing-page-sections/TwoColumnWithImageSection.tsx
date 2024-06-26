import Image from "next/image";

// interfaces
import { ISection } from "@/interfaces/common";

interface TwoColumnWithImageSectionProps extends ISection {
  imagePosition?: string;
}

export default function TwoColumnWithImageSection(
  props: TwoColumnWithImageSectionProps
) {
  const {
    headline,
    subheadline,
    buttonLabel,
    buttonUrl,
    image,
    imagePosition,
    scrollAnchorId,
  } = props;

  function createMarkup(): any {
    return { __html: subheadline };
  }

  return (
    <section id={scrollAnchorId} className="cta-section">
      <div className="container">
        <div className="row">
          {image && imagePosition === "left" && (
            <div className="col-lg-6 order-last order-lg-first">
              <div className="left-image cta-image ">
                <Image
                  src={image}
                  height={400}
                  width={600}
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          )}
          <div className="col-lg-6">
            <div className="cta-content-wrapper">
              <div className="section-title">
                <h2 className="mb-20">{headline}</h2>
                {subheadline ? (
                  <div dangerouslySetInnerHTML={createMarkup()} />
                ) : undefined}
              </div>
              <a href={buttonUrl} className="btn btn-primary mt-5">
                {buttonLabel}
              </a>
            </div>
          </div>
          {image && imagePosition === "right" && (
            <div className="col-lg-6">
              <div className="right-image cta-image text-lg-end">
                <Image
                  src={image}
                  height={400}
                  width={600}
                  alt=""
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
