function Child({ message, setMessage }) {
  return (
    <div>
      <h3>Child Component</h3>

       <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={() => setMessage("Updated from Child")}>
        Update Message
      </button>
    </div>
  );
}

export default Child;