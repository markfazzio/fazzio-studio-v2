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
    <div className="col-xl-4 col-lg-6 col-md-6 mb-3">
      <div className="card shadow-sm h-100">
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
        <div className="card-footer bg-white border-0 text-center">
          <Link href={`/blog/${slug}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
