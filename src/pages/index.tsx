/* eslint-disable react/display-name */
import React, { useState } from 'react';
import 'twin.macro';

const HelloWorld = React.memo(() => (
    <h1 tw="text-3xl font-bold underline">Hello world!</h1>
));

function HomePage() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        if (count === 0) return;
        setCount(count - 1);
    };

    const Count = React.memo(() => (
        <h1 data-testid="counter-text">Count: {count}</h1>
    ));

    const IncrementButton = React.memo(() => (
        <button
            type="button"
            data-testid="increase"
            title="+"
            onClick={incrementCount}
        >
            +
        </button>
    ));

    const DecrementButton = React.memo(() => (
        <button
            type="button"
            data-testid="decrease"
            title="-"
            onClick={decrementCount}
        >
            -
        </button>
    ));
    const App = React.memo(() => (
        <div className="app">
            <HelloWorld />
            <Count />
            <div className="buttons">
                <DecrementButton />
                <IncrementButton />
            </div>
        </div>
    ));

    return <App />;
}
export default HomePage;
