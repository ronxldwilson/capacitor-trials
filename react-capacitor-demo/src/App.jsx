import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: 30 }}>
      <h1>React + Capacitor Demo</h1>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <p>(Camera button will work on mobile!)</p>
    </div>
  );
}

export default App;
