import Link from "next/link";

// interfaces
import { ICategory } from "@/interfaces/common";

interface CategoriesWidgetProps {
  categories: Array<ICategory>;
}

export default function CategoriesWidget(props: CategoriesWidgetProps) {
  const { categories } = props;

  return (
    <div className="widget categories-widget">
      <h5 className="widget-title">Categories</h5>
      <ul className="categories-list">
        {categories.map((category: ICategory) => (
          <li key={category.slug}>
            <Link href={`/blog/category/${category.slug}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
