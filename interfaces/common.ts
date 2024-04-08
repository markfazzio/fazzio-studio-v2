import { MouseEventHandler } from "react";

export interface IAuthor {
  profile_image?: string;
  first_name?: string;
  last_name?: string;
}

interface BasePostProps {
  author?: IAuthor;
  date?: string;
  excerpt?: string;
  published?: string;
  slug?: string;
  summary?: string;
  tags?: Array<any>;
  title?: string;
  url?: string;
}

export interface IPost extends BasePostProps {
  body?: string;
  featuredImage?: string;
  featuredImageAlt: string;
  metaDescription?: string;
  seoTitle?: string;
}

// different image fields for preview
export interface IPostPreview extends BasePostProps {
  coverImage?: string;
  coverImageAlt: string;
}

export interface ICodeSnippet {
  title?: string;
  category?: string;
  description?: string;
  code?: string;
  copyButtonLocation?: "top" | "bottom";
}

export interface IFeature {
  headline?: string;
  description?: string;
  icon?: string;
}

export interface ISection {
  headline?: string;
  subheadline?: string;
  image?: string;
  buttonLabel?: string;
  buttonUrl?: string;
  scrollAnchorId?: string;
}

export interface IMainMenuLink {
  url?: string;
  label?: string;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export interface ICategory {
  name?: string;
  slug?: string;
}

export interface ICategoryPage {
  posts?: Array<IPost>;
  categories?: Array<ICategory>;
  slug?: string;
}
