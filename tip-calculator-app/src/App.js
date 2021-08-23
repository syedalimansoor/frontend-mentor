import "./styles/App.scss";
import logo from "./images/logo.svg";

import Calculator from "./components/Calculator/Calculator";

function App() {
  return (
    <div className="App">
      <img
        src={logo}
        className="App__logo"
        alt="'Splitter' tip calculator logo"
      />
      <Calculator />
    </div>
  );
}

export default App;
