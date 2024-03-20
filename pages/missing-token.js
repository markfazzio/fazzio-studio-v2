import MissingTokenSection from "@/components/MissingTokenSection";

export default function MissingToken() {
  return <MissingTokenSection />;
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
