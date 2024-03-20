import Head from "next/head";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

import camelcaseKeys from "camelcase-keys";

import { getLandingPage, getLandingPages, getPostsData } from "@/lib/api";

import LandingPageSection from "@/components/landing-page-sections/LandingPageSection";
import LoadingSpinner from "@/components/LoadingSpinner";
import BlogRoll from "@/components/blog/BlogRoll";

export default function LandingPage({ page, blogPosts }) {
  const router = useRouter();
  if (router.isFallback) {
    return <LoadingSpinner />;
  }

  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{page.fields.seo.title}</title>
        <meta name="description" content={page.fields.seo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://buttercms.com/static/v2/images/favicon.png"
        />
      </Head>

      <div className="page page-landing">
        {page.fields.body.map(({ type, fields: sectionData }, index) => (
          <LandingPageSection
            key={index}
            type={type}
            sectionData={sectionData}
          />
        ))}
        <BlogRoll posts={blogPosts} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  try {
    const page = await getLandingPage(params.slug);
    const blogPosts = (await getPostsData({ page: 1, pageSize: 2 })).posts;

    return {
      props: { page: camelcaseKeys(page), blogPosts: camelcaseKeys(blogPosts) },
    };
  } catch (e) {
    console.error(`Couldn't load content for Landing page ${params.slug}.`, e);

    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const butterToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  if (butterToken) {
    try {
      const landingPages = await getLandingPages();

      return {
        paths: landingPages.map((page) => `/landing-page/${page.slug}`),
        fallback: true,
      };
    } catch (e) {
      console.error("Couldn't load content for Landing pages.", e);
    }

    return {
      paths: [],
      fallback: false,
    };
  }
}
