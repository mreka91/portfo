import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="left">
        <Header />
      </div>
      <div className="right">
        <Profile />
      </div>
    </div>
  );
}

export default App;
