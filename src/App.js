import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Routes/Navbar";
import { Routes } from "./Routes/Routes";

function App() {
  const name = process.env.REACT_APP_NAME;
  return (
    <div className="App">
      <h1>{name}</h1>
      <Navbar></Navbar>
      <Routes></Routes>
    </div>
  );
}

export default App;
