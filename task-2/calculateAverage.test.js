import { describe, it, expect } from "vitest";
import { calculateAverage } from "./calculateAverage";

describe("calculateAverage", () => {
  it("returns the average for a normal array of valid numbers", () => {
    // [2, 4, 6] → (2 + 4 + 6) / 3 = 4
    expect(calculateAverage([2, 4, 6])).toBe(4);
  });

  it("returns the number itself when the array contains only one value", () => {
    expect(calculateAverage([5])).toBe(5);
  });

  it("returns null when the array is empty", () => {
    expect(calculateAverage([])).toBeNull();
  });

  it("returns null when the input is not an array", () => {
    expect(calculateAverage("123")).toBeNull();
    expect(calculateAverage(null)).toBeNull();
    expect(calculateAverage(undefined)).toBeNull();
    expect(calculateAverage(42)).toBeNull();
  });

  it("returns null when the array contains a non-number value", () => {
    expect(calculateAverage([1, 2, "3"])).toBeNull();
    expect(calculateAverage([10, true, 20])).toBeNull();
    expect(calculateAverage([5, {}, 15])).toBeNull();
  });

  it("correctly handles negative and decimal numbers", () => {
    // (-2 + 4.5 + 1.5) / 3 = 1.333...
    expect(calculateAverage([-2, 4.5, 1.5])).toBeCloseTo(1.3333, 4);
  });
});
