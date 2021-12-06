import * as React from "react";
import { Link } from "gatsby";

interface breadcrumbProps {
  items: Array<Record<string, string>>;
}

export default function Breadcrumbs(props: breadcrumbProps) {
  const liItems = props.items.map((item) => (
    <li className="utrecht-breadcrumb__item" key={item.name}>
      <Link
        className="utrecht-breadcrumb__link utrecht-breadcrumb__link--focus utrecht-link"
        to={item.href}
      >
        <span className="utrecht-breadcrumb__text">{item.name}</span>
      </Link>
    </li>
  ));

  return (
    <nav className="utrecht-breadcrumb">
      <ol className="utrecht-breadcrumb__list">{liItems}</ol>
    </nav>
  );
}
