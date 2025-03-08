export class Calculator {
    constructor() { 
        this.history = [];
    }

    calculate(expression) {
        const result = eval(expression);
        this.history.push({ expression, value: result });
        return eval(expression);
    }

    getHistory() {
        return this.history;
    }

    clearHistory() {
        this.history = [];
    }
}