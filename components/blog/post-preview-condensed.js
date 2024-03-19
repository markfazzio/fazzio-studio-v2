import Link from "next/link";
import Image from "next/image";

export default function PostPreviewCondensed({
  title,
  coverImage,
  coverImageAlt,
  excerpt,
  slug,
}) {
  return (
    <div className="col-lg-4 col-md-8 col-sm-10 mb-3">
      <div className="card">
        {coverImage && (
          <Image
            className="card-img"
            src={coverImage}
            alt={coverImageAlt}
            height={200}
            width={100}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h5>
          <p className="card-text">{excerpt}</p>
        </div>
        <div className="card-footer">
          <Link href={`/blog/${slug}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
