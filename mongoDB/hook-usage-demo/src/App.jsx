import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count updated: ${count}`);
  }, [count]);

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Hooks Lab</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;