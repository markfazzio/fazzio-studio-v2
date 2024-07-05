import { MouseEventHandler, ReactNode } from "react";

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

export interface IMainMenuLinkFields {
  url: string;
  label?: string;
  child_items?: Array<IMainMenuLink>;
}

export interface IMainMenuLink extends IMainMenuLinkFields {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLLIElement>;
}

export interface IMainMenuDropdown {
  active?: boolean;
  activeItemId?: string;
  id?: string;
  items?: Array<IMainMenuLinkFields>;
  label?: string;
  onItemClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  openOnHover?: boolean;
  show?: boolean;
  variant?: "dark" | "light" | string;
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

export interface IGitHubRepo {
  name: string;
  description: string;
  full_name: string;
  language: string;
  html_url: string;
}
