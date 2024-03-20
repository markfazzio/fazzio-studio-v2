// interfaces
import { IAuthor } from "@/interfaces/common";

interface AuthorCardProps {
  author: IAuthor;
}

export default function AuthorCard(props: AuthorCardProps) {
  const { author } = props;

  const authorAvatar =
    (author && author.profile_image) || "/images/team/team-1.png";

  return (
    <a>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="bg-info rounded-circle me-2"
        src={authorAvatar}
        alt={`Profile image ${author.first_name} ${author.last_name}`}
        width={40}
      />
      {author.first_name} {author.last_name}
    </a>
  );
}
