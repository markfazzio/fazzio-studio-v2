import Image from "next/image";

// interfaces
import { IPost } from "@/interfaces/common";

// components
import HumanDate from "./HumanDate";
import AuthorCard from "./AuthorCard";

interface SinglePostProps {
  post: IPost;
}

export default function SinglePost(props: SinglePostProps) {
  const { post } = props;

  function createMarkup(): any {
    return { __html: post.body };
  }

  return (
    <div className="single-post">
      <div className="single-post-meta">
        <div className="d-flex align-items-center mb-2">
          {post.author ? <AuthorCard author={post.author} /> : undefined}
          {post.published ? (
            <div className="ms-auto d-flex align-items-center">
              <i className="lni lni-calendar m-2"></i>{" "}
              <HumanDate dateString={post.published} />
            </div>
          ) : undefined}
        </div>
      </div>
      {post.featuredImage && (
        <div className="single-post-thumbnail text-center">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            sizes="50vw"
            style={{
              width: "50%",
              height: "auto",
            }}
            width={500}
            height={300}
          />
        </div>
      )}
      {post.body ? (
        <div className="px-3 py-5" dangerouslySetInnerHTML={createMarkup()} />
      ) : undefined}
    </div>
  );
}
