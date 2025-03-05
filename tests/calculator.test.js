import { describe, expect, it } from "vitest";
import { Calculator } from "../src/utils/calculator";

describe("Calculator test", () => {
    it("should return 2 when given '1 + 1'", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("1 + 1")).toBe(2);
    });
});