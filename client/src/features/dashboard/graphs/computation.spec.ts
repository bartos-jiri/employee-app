import { occurrences } from "./computation";

const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Orange" },
  { id: 5, name: "Banana" },
  { id: 6, name: "Apple" },
];

describe("occurrences", () => {
  it("should count occurrences of a property", () => {
    const result = occurrences(items, "name");
    expect(result).toEqual({
      Apple: 3,
      Banana: 2,
      Orange: 1,
    });
  });

  it("should handle empty items array", () => {
    const result = occurrences([], "name");
    expect(result).toEqual({});
  });

  it("should handle non-existent property", () => {
    const result = occurrences(items, "color" as any);
    expect(result).toEqual({});
  });
});
