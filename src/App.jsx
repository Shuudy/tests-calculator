import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";
import { useState } from "react";

function App() {
    const [input, setInput] = useState("0");

    const handleButtonClick = (value) => {
        if (value === "CE") {
            setInput("0");
            return;
        }
    };

    return (
        <div className="max-w-xs mx-auto mt-10 shadow-lg rounded-lg overflow-hidden">
            <Display input={input} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
}

export default App;
