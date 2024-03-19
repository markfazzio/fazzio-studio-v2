import Link from "next/link";

import camelcaseKeys from "camelcase-keys";

import PostsList from "@/components/blog/posts-list";

import { getCategories, searchPosts } from "@/lib/api";
import CategoriesWidget from "@/components/blog/categories-widget";
import SearchWidget from "@/components/blog/search-widget";

export default function Search({ posts, categories, query }) {
  return (
    <div className="page page-search">
      <section id="blog-roll" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Search Results</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="breadcrumb-item active">
                    Search: &#34;{query}&#34;
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="row justify-content-center">
            <PostsList posts={posts || []} />
            <aside className="col-12 col-lg-4">
              <SearchWidget />
              <CategoriesWidget categories={categories || []} />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps({ query: { query } }) {
  const blogPosts = await searchPosts({ query });
  const categories = await getCategories();

  return {
    props: { posts: camelcaseKeys(blogPosts), categories, query },
  };
}
