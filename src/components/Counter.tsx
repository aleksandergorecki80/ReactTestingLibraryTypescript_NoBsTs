import React, { useState } from "react";

export const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <button onClick={() => setCount((prevState) => prevState +1)}>Add one</button>
            <span role="contentinfo">Count = {count}</span>
        </div>
    )
} 