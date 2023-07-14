import { useState } from 'react';
import cn from 'classnames';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-9">
      <h1 className="text-5xl font-semibold text-indigo-800">
        Vite + React + TS + SCSS + TailWind + ESLint + Prettier
      </h1>
      <div>
        <button
          onClick={() => setCount((count) => count + 1)}
          className={cn(
            'font-mono',
            'font-medium',
            'text-gray-900',
            'text-xl',
            'pt-2',
            'pb-1',
            'px-4',
            'border-2',
            'rounded-md',
            'border-cyan-600',
            'hover:border-red-600',
            'duration-200',
          )}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
}

export default App;
