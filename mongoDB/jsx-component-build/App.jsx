import Welcome from "./Welcome";
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <Welcome />

      <UserCard name="jul" email="jul@gmail.com" />
      <UserCard name="lek" email="lek@gmail.com" />
    </div>
  );
}

export default App;