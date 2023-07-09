export const occurrences = <T extends object, K extends keyof T>(
  items: T[],
  prop: K
) => {
  const result = {} as Record<T[K], number>;

  for (const item of items) {
    if (prop in item) {
      if (result[item[prop]]) {
        result[item[prop]]++;
      } else {
        result[item[prop]] = 1;
      }
    }
  }

  return result;
};
