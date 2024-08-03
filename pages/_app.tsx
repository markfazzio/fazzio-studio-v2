import { useEffect, useState } from "react";
import Router from "next/router";
import App, { AppContext } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

// api
import { getMainMenu } from "@/lib/api";

// components
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoadingSpinner from "@/components/LoadingSpinner";

// lib
import "bootstrap/dist/css/bootstrap.css";

// ours
import "@/css/main.css";

function MyApp({ Component, pageProps, mainMenu }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const authToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;

  useEffect(() => {
    const showLoader = () => {
      setIsLoading(true);
    };

    const removeLoader = () => {
      setIsLoading(false);
    };

    Router.events.on("routeChangeStart", showLoader);
    Router.events.on("routeChangeComplete", removeLoader);
    Router.events.on("routeChangeError", removeLoader);

    return () => {
      Router.events.off("routeChangeStart", showLoader);
      Router.events.off("routeChangeComplete", removeLoader);
      Router.events.off("routeChangeError", removeLoader);
    };
  }, [authToken, router]);

  const pageLayout = authToken ? (
    <>
      <HeaderSection mainMenu={mainMenu} />
      <Component {...pageProps} />
      <FooterSection mainMenu={mainMenu} />
      <ScrollToTopButton />
    </>
  ) : (
    <Component {...pageProps} />
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>Mark Fazzio | JAMStack Engineer</title>
        <meta name="description" content="Mark Fazzio | JAMStack Engineer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.svg" />
      </Head>

      {isLoading && <LoadingSpinner></LoadingSpinner>}

      {!isLoading && pageLayout}
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const authToken = process.env.NEXT_PUBLIC_BUTTER_CMS_API_KEY;
  let mainMenu = [];

  if (authToken) {
    try {
      mainMenu = await getMainMenu();
    } catch (e) {
      console.error("Couldn't load main menu links.", e);
    }
  }

  return { ...appProps, mainMenu };
};

export default MyApp;
