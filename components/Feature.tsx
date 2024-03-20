import Image from "next/image";

// interfaces
import { IFeature } from "@/interfaces/common";

export default function Feature(props: IFeature) {
  const { headline, description, icon } = props;

  return (
    <div className="col-lg-3 col-sm-6">
      <div className="single-feature text-center">
        <div className="feature-icon mb-3">
          {icon && (
            <Image src={icon} alt="" sizes="100vw" width={100} height={100} />
          )}
        </div>
        <div className="feature-content">
          <h4>{headline}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
