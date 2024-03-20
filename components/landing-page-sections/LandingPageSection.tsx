import dynamic from "next/dynamic";

import camelcaseKeys from "camelcase-keys";

import Preloader from "@/components/LoadingSpinner";
import MissingSection from "./MissingSection";

interface LandingPageSectionProps {
  type: string;
  sectionData?: any;
}

export default function LandingPageSection(props: LandingPageSectionProps) {
  const { type, sectionData } = props;

  const sectionsComponentPaths = () => ({
    hero: dynamic(
      () =>
        import("@/components/landing-page-sections/HeroSection").catch(
          () => () => MissingSection
        ) as any,
      {
        loading: Preloader,
      }
    ),
    two_column_with_image: dynamic(
      () =>
        import(
          "@/components/landing-page-sections/TwoColumnWithImageSection"
        ).catch(() => () => MissingSection) as any,
      {
        loading: Preloader,
      }
    ),
    features: dynamic(
      () =>
        import("@/components/landing-page-sections/FeaturesSection").catch(
          () => () => MissingSection
        ) as any,
      {
        loading: Preloader,
      }
    ),
    code_snippets: dynamic(
      () =>
        import("@/components/CodeSnippetsGrid").catch(
          () => () => MissingSection
        ) as any,
      {
        loading: Preloader,
      }
    ),
    resume: dynamic(
      () =>
        import("@/components/landing-page-sections/ResumeSection").catch(
          () => () => MissingSection
        ) as any,
      {
        loading: Preloader,
      }
    ),
  });
  const foundType = type ? (sectionsComponentPaths() as any)[type] : undefined;
  const SectionComponent = foundType || MissingSection;
  return <SectionComponent type={type} {...camelcaseKeys(sectionData)} />;
}
