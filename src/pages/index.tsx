import { useState } from 'react';

function HomePage() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <div className="count">
                <h1 data-testid="counter-text">Count: {count}</h1>
            </div>
            <div className="app">
                <div className="buttons">
                    <button
                        type="button"
                        data-testid="decrease"
                        title="-"
                        onClick={decrementCount}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        data-testid="increase"
                        title="+"
                        onClick={incrementCount}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
export default HomePage