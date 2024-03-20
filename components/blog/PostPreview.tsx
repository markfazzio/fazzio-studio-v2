import Image from "next/image";
import Link from "next/link";

// components
import HumanDate from "@/components/HumanDate";
import AuthorCard from "@/components/AuthorCard";

// interfaces
import { ICategory, IPostPreview } from "@/interfaces/common";

export default function PostsPreview(props: IPostPreview) {
  const {
    title,
    coverImage,
    coverImageAlt = "Cover Image",
    date,
    author,
    tags,
    excerpt,
    slug,
  } = props;

  function createMarkup(): any {
    return { __html: excerpt };
  }

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
            {author ? <AuthorCard author={author} /> : undefined}
            {date ? (
              <div className="ms-auto d-flex align-items-center">
                <i className="lni lni-calendar m-2"></i>{" "}
                <HumanDate dateString={date} />
              </div>
            ) : undefined}
          </div>
          {excerpt ? (
            <div
              className="card-text"
              dangerouslySetInnerHTML={createMarkup()}
            />
          ) : undefined}
        </div>
        {tags && tags.length ? (
          <div className="card-tags px-3">
            <ul className="list-inline">
              {tags.map((tag: ICategory) => (
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
