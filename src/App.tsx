import { useState } from 'react';
import './App.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React + TS + SCSS + ESLint + Prettier</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
