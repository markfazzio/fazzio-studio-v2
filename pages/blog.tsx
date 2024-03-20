import Link from "next/link";
import camelcaseKeys from "camelcase-keys";

// api
import { getPostsData, getCategories } from "@/lib/api";

// components
import CategoriesWidget from "@/components/blog/CategoriesWidget";
import SearchWidget from "@/components/blog/SearchWidget";
import PostsList from "@/components/blog/PostsList";

// interfaces
import { ICategory, IPost } from "@/interfaces/common";

interface BlogPageProps {
  posts?: Array<IPost>;
  categories?: Array<ICategory>;
}

export default function Blog(props: BlogPageProps) {
  const { posts, categories } = props;

  return (
    <div className="page page-blog">
      <section id="blog-roll" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Blog</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Blog</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="row justify-content-center">
            {posts && posts.length ? <PostsList posts={posts} /> : undefined}
            <aside className="col-12 col-lg-4">
              <SearchWidget />
              {categories && categories.length ? (
                <CategoriesWidget categories={categories} />
              ) : undefined}
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const blogPosts = (await getPostsData()).posts;
      const categories = await getCategories();

      return { props: { posts: camelcaseKeys(blogPosts), categories } };
    } catch (e) {
      console.log("Could not get posts", e);

      return {
        props: { posts: [], categories: [] },
      };
    }
  }

  return { props: { posts: [], categories: [] } };
}
