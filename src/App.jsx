import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import { useState, useRef } from "react";
import { Calculator } from "./utils/calculator.js";
import History from "./components/History";

function App() {
    const [input, setInput] = useState("0");
    const [history, setHistory] = useState([]);
    const calculatorRef = useRef(new Calculator());

    const handleButtonClick = (value) => {
        if (value === "CE") {
            setInput("0");
            return;
        }

        if (value === "C") {
            setInput("0");
            setHistory([]);
            calculatorRef.current.clearHistory();
            return;
        }

        if (value === "=") {
            setInput(calculatorRef.current.calculate(input).toString());
            setHistory(calculatorRef.current.getHistory());
            return;
        }

        setInput((prevInput) =>
            prevInput === "0" ? value : prevInput + value
        );
    };

    return (
        <>
            <h1 className="text-center text-2xl font-bold my-4">Tests Calculator</h1>
            <div className="max-w-xs mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">            
                <Display input={input} />
                <ButtonPanel onButtonClick={handleButtonClick} />
                <History history={history} />
            </div>
        </>
    );
}

export default App;
