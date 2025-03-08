import { describe, expect, it, beforeEach } from "vitest";
import { Calculator } from "../src/utils/calculator";

describe("Calculator test", () => {
    let calculator = new Calculator();
    
    beforeEach(() => {
        calculator.clearHistory();
    });

    it("should return 2 when given '1 + 1'", () => {
        expect(calculator.calculate("1 + 1")).toBe(2);
    });

    it("shoud return 3 when given '1 + 2'", () => {
        expect(calculator.calculate("1 + 2")).toBe(3);
    });

    it("should return 4 when given '2 * 2'", () => {
        expect(calculator.calculate("2 * 2")).toBe(4);
    });

    it("should return 5 when given '10 - 5'", () => {
        expect(calculator.calculate("10 - 5")).toBe(5);
    });

    it("should return { expression: '10 - 5', value: 5 } in history when given '10 - 5'", () => {
        calculator.calculate("10 - 5");

        expect(calculator.getHistory()[0]).toEqual({ expression: '10 - 5', value: 5 });
    });

    it("should return [ { expression: '10 - 5', value: 5 }, { expression: '29 * 4', value: 116 } ] in history when given '10 - 5' and '29 * 4", () => {
        calculator.calculate("10 - 5");
        calculator.calculate("29 * 4");

        expect(calculator.getHistory()[0]).toEqual({ expression: '10 - 5', value: 5 });
        expect(calculator.getHistory()[1]).toEqual({ expression: '29 * 4', value: 116 });
    });

    it("should return empty history when clearHistory is called", () => {
        calculator.calculate("10 - 9");
        calculator.clearHistory();

        expect(calculator.getHistory()).toEqual([]);
    });

    it("should return error when given unexpected end of input", () => {
        expect(() => calculator.calculate("10 -")).toThrow("Unexpected end of input");
    });
});