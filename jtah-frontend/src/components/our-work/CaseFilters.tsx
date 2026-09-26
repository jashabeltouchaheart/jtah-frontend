import { CaseSearch } from "./CaseSearch";
import { CaseCategoryChips } from "./CaseCategoryChips";

interface CaseFiltersProps {
  category?: string;
  q?: string;
}

export function CaseFilters({ category, q }: CaseFiltersProps) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
      <CaseSearch category={category} q={q} />
      <CaseCategoryChips category={category} q={q} />
    </div>
  );
}
