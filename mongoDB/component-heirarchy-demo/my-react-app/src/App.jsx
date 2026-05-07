import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  const userData = {
    name: "John Doe",
    role: "Developer",
  };

  return (
    <div>
      <Header />
      <MainContainer user={userData} />
    </div>
  );
}

export default App;