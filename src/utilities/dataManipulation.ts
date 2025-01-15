export function categorizeBySafe<T, K extends keyof T>(
  array: T[],
  key: K
): Record<string, T[]> {
  return array.reduce((acc, item) => {
    const category = item[key] != null ? String(item[key]) : "Uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, T[]>);
}

// Example with null/undefined
// const productsWithMissingCategory = [
//   ...products,
//   { id: 5, name: "Unknown Item", category: null, price: 10 },
// ] as Product[];

// const categorizedSafe = categorizeBySafe(
//   productsWithMissingCategory,
//   "category"
// );
// console.log(categorizedSafe);
