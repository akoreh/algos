const { binarySearch } = require("./binary-search.js");

describe("binarySearch (iterative)", () => {
  test("finds a middle element", () => {
    expect(binarySearch([1, 3, 5, 7, 9], 7)).toBe(3);
  });

  test("returns -1 when target is missing", () => {
    expect(binarySearch([1, 2, 3, 4], 10)).toBe(-1);
  });

  test("finds first and last elements", () => {
    expect(binarySearch([10, 20, 30], 10)).toBe(0);
    expect(binarySearch([10, 20, 30], 30)).toBe(2);
  });

  test("single-element array", () => {
    expect(binarySearch([5], 5)).toBe(0);
    expect(binarySearch([5], 1)).toBe(-1);
  });

  test("empty array returns -1", () => {
    expect(binarySearch([], 123)).toBe(-1);
  });

  test("handles duplicate values (returns any valid index)", () => {
    const arr = [1, 2, 2, 2, 3];
    const res = binarySearch(arr, 2);
    expect(res).toBeGreaterThanOrEqual(1);
    expect(res).toBeLessThanOrEqual(3);
    expect(arr[res]).toBe(2);
  });

  test("works with negative numbers", () => {
    expect(binarySearch([-10, -5, -2, 0, 4], -5)).toBe(1);
  });

  test("large array checks", () => {
    const n = 10000;
    const arr = Array.from({ length: n }, (_, i) => i * 2); // even numbers
    expect(binarySearch(arr, 0)).toBe(0);
    expect(binarySearch(arr, (n - 1) * 2)).toBe(n - 1);
    expect(binarySearch(arr, -1)).toBe(-1);
    expect(binarySearch(arr, 1234567)).toBe(-1);
  });

  test("randomized property tests (50 iterations)", () => {
    for (let t = 0; t < 50; t++) {
      const len = Math.floor(Math.random() * 100);
      const base = Math.floor(Math.random() * 5);
      const arr = Array.from(
        { length: len },
        (_, i) => base + Math.floor(i / 3)
      );
      // ensure sorted
      arr.sort((a, b) => a - b);

      // pick an element that may or may not be present
      const pick =
        Math.random() < 0.7 && arr.length
          ? arr[Math.floor(Math.random() * arr.length)]
          : Math.floor(Math.random() * 10) + 1000;
      const expectedIndex = arr.indexOf(pick);
      const res = binarySearch(arr, pick);
      if (expectedIndex === -1) {
        expect(res).toBe(-1);
      } else {
        expect(arr[res]).toBe(pick);
      }
    }
  });

  test("should work for many example cases", () => {
    const examples = [
      { arr: [2, 8, 89, 120, 1000], target: 120, expected: 3 },
      { arr: [1, 2, 3, 4, 5], target: 1, expected: 0 },
      { arr: [1, 2, 3, 4, 5], target: 5, expected: 4 },
      { arr: [], target: 7, expected: -1 },
      { arr: [7], target: 7, expected: 0 },
      { arr: [7], target: 8, expected: -1 },
      { arr: [-10, -3, 0, 4, 9], target: -10, expected: 0 },
      { arr: [-10, -3, 0, 4, 9], target: 9, expected: 4 },
      {
        arr: Array.from({ length: 100 }, (_, i) => i),
        target: 57,
        expected: 57,
      },
      { arr: [1, 3, 5, 7], target: 2, expected: -1 },
      { arr: [1, 2], target: 2, expected: 1 },
      { arr: [1, 2], target: 3, expected: -1 },
    ];

    examples.forEach(({ arr, target, expected }) => {
      const res = binarySearch(arr, target);
      if (expected === "any") {
        // In cases where any matching index is acceptable
        expect(arr[res]).toBe(target);
      } else {
        expect(res).toBe(expected);
      }
    });
  });
});
