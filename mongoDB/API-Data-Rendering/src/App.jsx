import { useEffect, useState } from "react";
import DataList from "./components/DataList";
import Loader from "./components/Loader";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
      setError("Failed to fetch data");
      setLoading(false);
    });
  }, []);

  return (
  <div>
    <h1>API Data</h1>

    {loading && <Loader />}
    {error && <p>{error}</p>}
    {!loading && !error && <DataList data={data} />}
  </div>
);
}

export default App;