import Link from "next/link";
import Image from "next/image";
import { IPostPreview } from "@/interfaces/common";

export default function PostPreviewCondensed(props: IPostPreview) {
  const {
    title,
    coverImage,
    coverImageAlt = "Cover Image",
    excerpt,
    slug,
  } = props;

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
          <p className="card-text">
            {excerpt}{" "}
            <Link
              href={`/blog/${slug}`}
              className="btn btn-link py-0 px-2 lh-1"
            >
              Read More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
