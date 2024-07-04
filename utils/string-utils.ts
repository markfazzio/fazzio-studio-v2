export const slugToWords = (slug: string): string | undefined => {
  // failsafe
  if (!slug) return;

  const result = slug.replace("-", " ");
  return (result.charAt(0) + result.slice(1))
    .replace("utils", "")
    .toUpperCase()
    .replace(" ", "");
};

export const labelToId = (label: string) => {
  if (!label) return;

  return label.replace(" ", "-").toLowerCase();
};

export const isAbsoluteUrl = (url: string) => {
  return url && url.includes("http");
};
