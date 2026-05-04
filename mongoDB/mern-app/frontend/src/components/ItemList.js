import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemList() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const API = "http://localhost:5000/items";

  // GET items
  const fetchItems = async () => {
    const res = await axios.get(API);
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // ADD item
  const addItem = async () => {
    await axios.post(`${API}/add`, { name, description });
    setName("");
    setDescription("");
    fetchItems();
  };

  // DELETE item
  const deleteItem = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchItems();
  };

  return (
    <div>
      <h2>Add Item</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addItem}>Add</button>

      <h2>Items</h2>

      {items.map((item) => (
        <div key={item._id} style={{ marginBottom: "10px" }}>
          <b>{item.name}</b> - {item.description}
          <button onClick={() => deleteItem(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ItemList;