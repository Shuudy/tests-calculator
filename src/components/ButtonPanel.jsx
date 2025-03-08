import Button from "./Button";

function ButtonPanel({ onButtonClick }) {
    const buttons = [
        ["CE", "C", "7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["0", ".", "=", "+"],
    ];

    return (
        <div className="grid grid-cols-4 gap-2 p-2 bg-white rounded-b">
            {buttons.flat().map((btn) => (
                <Button
                    key={btn}
                    label={btn}
                    onClick={() => onButtonClick(btn)}
                    className={
                        btn === "C" || btn === "CE" ? "col-span-2 bg-red-500 text-white" : ""
                    }
                />
            ))}
        </div>
    );
}

export default ButtonPanel;
