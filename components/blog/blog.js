import Link from "next/link";

import PostPreviewCondensed from "./post-preview-condensed";

export default function Blog({ posts }) {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="section-title text-center">
              <h2>Latest Blog Posts</h2>
              <p>
                <Link href={`/blog`} className="btn btn-primary mt-5">
                  View All Blog Posts
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {posts.map((post) => (
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
