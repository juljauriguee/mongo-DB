import { useState } from "react";
import Child from "./Child";
import Display from "./Display";

function Parent() {
  const [message, setMessage] = useState("Hello from Parent");

  return (
    <div>
      <h2>Parent Component</h2>

      <Child message={message} setMessage={setMessage} />
      <Child message={message} setMessage={setMessage} />
      
      <Display message={message} />
    </div>
  );
}

export default Parent;