import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface PaginationProps {
  page: number;
  totalPages: number;
  hrefFor: (page: number) => string;
}

const base =
  "inline-flex size-9 items-center justify-center rounded-full border text-xs font-medium transition-colors";
const idle =
  "border-ink/15 bg-white text-ink/75 hover:border-brand hover:text-brand";
const active = "border-brand bg-brand text-white";

export function Pagination({ page, totalPages, hrefFor }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      {page > 1 && (
        <Link
          href={hrefFor(page - 1)}
          scroll={false}
          aria-label="Previous page"
          className={cn(base, idle)}
        >
          <ChevronLeft aria-hidden className="size-4" />
        </Link>
      )}

      {pages.map((n) => (
        <Link
          key={n}
          href={hrefFor(n)}
          scroll={false}
          aria-current={n === page ? "page" : undefined}
          className={cn(base, n === page ? active : idle)}
        >
          {n}
        </Link>
      ))}

      {page < totalPages && (
        <Link
          href={hrefFor(page + 1)}
          scroll={false}
          aria-label="Next page"
          className={cn(base, idle)}
        >
          <ChevronRight aria-hidden className="size-4" />
        </Link>
      )}
    </nav>
  );
}
