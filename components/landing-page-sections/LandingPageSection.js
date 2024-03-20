import dynamic from "next/dynamic";

import camelcaseKeys from "camelcase-keys";

import Preloader from "@/components/LoadingSpinner";
import MissingSection from "./MissingSection";

export default function LandingPageSection({ type, sectionData }) {
  const sectionsComponentPaths = () => ({
    hero: dynamic(
      () =>
        import("@/components/landing-page-sections/HeroSection").catch(
          () => () => MissingSection
        ),
      {
        loading: Preloader,
      }
    ),
    two_column_with_image: dynamic(
      () =>
        import(
          "@/components/landing-page-sections/TwoColumnWithImageSection"
        ).catch(() => () => MissingSection),
      {
        loading: Preloader,
      }
    ),
    features: dynamic(
      () =>
        import("@/components/landing-page-sections/FeaturesSection").catch(
          () => () => MissingSection
        ),
      {
        loading: Preloader,
      }
    ),
    code_snippets: dynamic(
      () =>
        import("@/components/CodeSnippetsGrid").catch(
          () => () => MissingSection
        ),
      {
        loading: Preloader,
      }
    ),
    resume: dynamic(
      () =>
        import("@/components/landing-page-sections/ResumeSection").catch(
          () => () => MissingSection
        ),
      {
        loading: Preloader,
      }
    ),
  });
  const SectionComponent = sectionsComponentPaths()[type] || MissingSection;

  return <SectionComponent type={type} {...camelcaseKeys(sectionData)} />;
}
