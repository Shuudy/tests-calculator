import { describe, expect, it } from "vitest";
import { Calculator } from "../src/utils/calculator";

describe("Calculator test", () => {
    it("should return 2 when given '1 + 1'", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("1 + 1")).toBe(2);
    });

    it("shoud return 3 when given '1 + 2'", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("1 + 2")).toBe(3);
    });

    it("should return 4 when given '2 * 2'", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("2 * 2")).toBe(4);
    });

    it("should return 5 when given '10 - 5'", () => {
        const calculator = new Calculator();
        expect(calculator.calculate("10 - 5")).toBe(5);
    });

    it("should return { expression: '10 - 5', value: 5 } in history when given '10 - 5'", () => {
        const calculator = new Calculator();
        expect(calculator.getHistory()[0]).toBe({ expression: '10 - 5', value: 5 });
    });
});