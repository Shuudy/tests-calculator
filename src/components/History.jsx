function History({ history }) {
    return (
        <div className="history bg-gray-200 p-4 mt-2 rounded">
            <h3 className="text-lg font-bold">History</h3>  
            <ul>
                {history.map((item, index) => (
                    <li key={index} className="text-sm">
                        {item.expression} = {item.value}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default History;
