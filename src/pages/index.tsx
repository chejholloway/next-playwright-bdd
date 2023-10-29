import { useState } from 'react';
import tw from 'twin.macro';

const Column = tw.div`flex flex-col justify-center h-full gap-y-5`;

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
    <Column>
      <h1 tw="text-3xl font-bold underline">Hello world!</h1>
      <h1 data-testid="counter-text">Count: {count}</h1>
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
    </Column>
  );
}
export default HomePage;
