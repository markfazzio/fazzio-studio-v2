import Link from "next/link";

// components
import PostPreviewCondensed from "./PostPreviewCondensed";
import { IPost } from "@/interfaces/common";

// interfaces
interface BlogRollProps {
  posts: Array<any>;
}

export default function BlogRoll(props: BlogRollProps) {
  const { posts } = props;

  return (
    <section id="blog" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-10">
            <div className="section-title d-flex mb-4">
              <h2 className="mb-0 me-3">Latest Blog Posts</h2>
              <Link href={`/blog`} className="btn btn-primary">
                View All Blog Posts
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post: IPost) => (
            <PostPreviewCondensed
              key={post.slug}
              title={post.title}
              coverImage={post.featuredImage}
              coverImageAlt={post.featuredImageAlt}
              date={post.published}
              author={post.author}
              slug={post.slug}
              excerpt={post.summary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
