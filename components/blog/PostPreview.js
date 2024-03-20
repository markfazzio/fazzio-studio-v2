import Image from "next/image";
import Link from "next/link";

import HumanDate from "@/components/HumanDate";
import AuthorCard from "@/components/AuthorCard";

export default function PostsPreview({
  title,
  coverImage,
  coverImageAlt,
  date,
  author,
  tags,
  excerpt,
  slug,
}) {
  return (
    <div className="col-12 col-lg-6">
      <div className="card shadow-sm h-100 bg-white mb-3">
        {coverImage && (
          <Image
            className="card-img-top"
            src={coverImage}
            alt={coverImageAlt}
            width={100}
            height={200}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        )}
        <div className="card-body">
          <h5 className="card-title">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h5>
          <div className="d-flex align-items-center mb-2">
            <AuthorCard author={author} />
            <div className="ms-auto d-flex align-items-center">
              <i className="lni lni-calendar m-2"></i>{" "}
              <HumanDate dateString={date} />
            </div>
          </div>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          ></div>
        </div>
        {tags && tags.length ? (
          <div className="card-tags px-3">
            <ul className="list-inline">
              {tags.map((tag) => (
                <li className="list-inline-item" key={tag.slug}>
                  <Link href={`/blog/tag/${tag.slug}`}>
                    <i className="lni lni-tag"></i> {tag.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : undefined}
        <div className="card-footer bg-white border-0 text-center">
          <Link href={`/blog/${slug}`} className="btn btn-primary">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
