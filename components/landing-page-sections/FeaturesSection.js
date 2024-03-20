import Feature from "@/components/Feature";

export default function Features({
  headline,
  subheadline,
  features,
  scrollAnchorId,
}) {
  return (
    <section id={scrollAnchorId} className="feature-section py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="section-title p-5 text-center mx-auto">
              <h2 className="mb-20">{headline}</h2>
              <p>{subheadline}</p>
            </div>
            <div className="row">
              {features.map((feature, index) => (
                <Feature
                  key={index}
                  headline={feature.headline}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
