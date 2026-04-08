export const SORT_OPTIONS = [
  { value: "pages-asc", label: "Pages (Low to High)" },
  { value: "pages-desc", label: "Pages (High to Low)" },
  { value: "rating-asc", label: "Rating (Low to High)" },
  { value: "rating-desc", label: "Rating (High to Low)" },
];

const SORT_COMPARATORS = {
  "pages-asc": (a, b) => a.totalPages - b.totalPages,
  "pages-desc": (a, b) => b.totalPages - a.totalPages,
  "rating-asc": (a, b) => a.rating - b.rating,
  "rating-desc": (a, b) => b.rating - a.rating,
};

export const sortBooks = (books, sortKey) => {
  const comparator = SORT_COMPARATORS[sortKey];

  if (!comparator) {
    return [...books];
  }

  return [...books].sort(comparator);
};

export const getSortLabel = (sortKey) =>
  SORT_OPTIONS.find((option) => option.value === sortKey)?.label ?? "Sort by";
