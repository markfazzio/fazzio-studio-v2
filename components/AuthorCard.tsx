// interfaces
import { IAuthor } from "@/interfaces/common";
import Image from "next/image";

interface AuthorCardProps {
  author: IAuthor;
}

export default function AuthorCard(props: AuthorCardProps) {
  const { author } = props;

  const authorAvatar =
    (author && author.profile_image) || "/images/team/team-1.png";

  return (
    <a>
      <Image
        className="bg-info rounded-circle me-2"
        src={authorAvatar}
        alt={`Profile image ${author.first_name} ${author.last_name}`}
        sizes="100vw"
        width={40}
        height={40}
      />
      {author.first_name} {author.last_name}
    </a>
  );
}
