import Link from "next/link";
import camelcaseKeys from "camelcase-keys";

// api
import { getPostsData, getCategories, getTags } from "@/lib/api";

// components
import CategoriesWidget from "@/components/blog/CategoriesWidget";
import SearchWidget from "@/components/blog/SearchWidget";
import PostsList from "@/components/blog/PostsList";

// interfaces
import { ICategory, ICategoryPage } from "@/interfaces/common";

export default function Tag(props: ICategoryPage) {
  const { posts, categories, slug } = props;

  return (
    <div className="page page-tag">
      <section id="blog-roll" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Blog Posts by Tag</h2>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li className="breadcrumb-item active">Tag: {slug}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-posts">
        <div className="container">
          <div className="row">
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

export async function getStaticProps({ params: { slug } }: any) {
  try {
    const blogPosts = (await getPostsData({ tag: slug } as any)).posts;
    const categories = await getCategories();

    return {
      props: { posts: camelcaseKeys(blogPosts), categories, slug },
      revalidate: 1,
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  if (butterToken) {
    try {
      const tags = await getTags();

      return {
        paths: tags.map((tag: ICategory) => `/blog/tag/${tag.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error(`Couldn't load tags.`, e);

      return {
        paths: [],
        fallback: false,
      };
    }
  }

  return {
    paths: [],
    fallback: false,
  };
}
