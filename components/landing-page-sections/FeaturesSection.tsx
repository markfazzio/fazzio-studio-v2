// components
import Feature from "@/components/Feature";

// interfaces
import { IFeature, ISection } from "@/interfaces/common";

interface FeaturesSectionProps extends ISection {
  features?: Array<IFeature>;
}

export default function FeaturesSection(props: FeaturesSectionProps) {
  const { headline, subheadline, features, scrollAnchorId } = props;

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
              {features && features.length
                ? features.map((feature: IFeature, index: number) => (
                    <Feature
                      key={`feature-${index}`}
                      headline={feature.headline}
                      description={feature.description}
                      icon={feature.icon}
                    />
                  ))
                : undefined}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
