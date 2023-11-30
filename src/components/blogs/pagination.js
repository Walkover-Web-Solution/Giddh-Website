import { generatePagination } from './lib/pagination'
import Link from "next/link";

function Pagination({ current, pages, link }) {
   const pagination = generatePagination(current, pages);
  return (
    <ul className="pagination-padding">
      {pagination.map((it, i) => (
        <li key={i}>
          {it.excerpt ? (
            "..."
          ) : (
            <Link legacyBehavior href={link.href(it.page)} as={link.as(it.page)}>
              <a className={it.page === current ? "active" : null}>{it.page}</a>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Pagination;
