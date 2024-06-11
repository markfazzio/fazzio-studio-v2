import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import camelcaseKeys from "camelcase-keys";

// api
import { getPost, getPostsData, getCategories } from "@/lib/api";

// components
import CategoriesWidget from "@/components/blog/CategoriesWidget";
import SearchWidget from "@/components/blog/SearchWidget";
import LoadingSpinner from "@/components/LoadingSpinner";
import SinglePost from "@/components/SinglePost";

// interfaces
import { ICategory, IPost } from "@/interfaces/common";

interface BlogPostProps {
  post: IPost;
  categories?: Array<ICategory>;
}

export default function BlogPost(props: BlogPostProps) {
  const { post, categories } = props;

  const router = useRouter();
  if (router.isFallback) {
    return <LoadingSpinner />;
  }

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{post.seoTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://buttercms.com/static/v2/images/favicon.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={post.url} />
        <meta property="og:title" content={post.seoTitle} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:description" content={post.metaDescription} />
        <meta name="twitter:site" content="@ButterCMS" />
        <meta name="twitter:creator" content="@ButterCMS" />
        <meta name="twitter:title" content="ButterCMS Blog" />
        <meta name="twitter:description" content={post.metaDescription} />
      </Head>
      <div className="page post-single">
        <section id="blog-header" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>{post.title}</h2>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li className="breadcrumb-item active">{post.title}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-post">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-12">
                <SinglePost post={post} />
              </div>

              <aside className="col-12 col-lg-4">
                <SearchWidget />
                <CategoriesWidget categories={categories || []} />
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export async function getStaticProps({ params }: any) {
  try {
    const post = await getPost(params.slug);
    const categories = await getCategories();
    return { props: { post: camelcaseKeys(post), categories } };
  } catch (e) {
    console.error(`Couldn't load post or categories data.`, e);

    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const posts = (await getPostsData()).posts;

      return {
        paths: posts.map((post: IPost) => `/blog/${post.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error(`Couldn't load posts.`, e);
    }
  }

  return {
    paths: [],
    fallback: false,
  };
}
