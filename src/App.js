import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Switch from "./components/Switch";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="container">
          <div>
            <Switch switchValue={switch1} setSwitch={setSwitch1} />
            <Switch switchValue={switch2} setSwitch={setSwitch2} />
            <Switch switchValue={switch3} setSwitch={setSwitch3} />
            <button
              className="reset"
              onClick={() => {
                setSwitch1(false);
                setSwitch2(false);
                setSwitch3(false);
              }}
            >
              Reset Procedure
            </button>
          </div>
          <div
            className={`spaceship ${
              switch1 && switch2 && switch3 ? "authorized" : "forbidden"
            }`}
          >
            <span>{switch1 && switch2 && switch3 ? "Go!" : "No way !"}</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
