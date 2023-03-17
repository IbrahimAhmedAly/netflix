import "./App.scss";
import Featured from "./components/featured/Featured";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

function App() {
  return (
    <>
      <Navbar />
      <Featured />
    </>
  );
}

export default App;
