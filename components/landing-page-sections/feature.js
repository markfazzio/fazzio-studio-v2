import Image from "next/image";

export default function Feature({ headline, description, icon }) {
  return (
    <div className="col">
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
