import { CATEGORY_VARIANTS } from "constants/common";
import { Variant } from "react-bootstrap/esm/types";

export const getCategoryBadgeVariant = (category: string) => {
  if (!category) return;

  if (category.includes("date")) {
    return CATEGORY_VARIANTS.DATE;
  }

  if (category.includes("string")) {
    return CATEGORY_VARIANTS.STRING;
  }

  if (category.includes("array")) {
    return CATEGORY_VARIANTS.ARRAY;
  }

  if (category.includes("api")) {
    return CATEGORY_VARIANTS.API;
  }

  if (category.includes("number")) {
    return CATEGORY_VARIANTS.NUMBER;
  }

  if (category.includes("styling")) {
    return CATEGORY_VARIANTS.STYLING;
  }
};

export const isLightText = (variant: Variant): boolean => {
  const textLightVariants = [
    "secondary",
    "success",
    "dark",
    "danger",
    "primary",
    "info",
  ];
  return textLightVariants.includes(variant);
};
