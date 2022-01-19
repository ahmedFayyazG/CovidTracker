import logo from "./logo.svg";
import "./App.css";
import CovidHome from "./Corona/CoronaHome";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <BackGroundColor>
        <CovidHome />
      </BackGroundColor>
    </div>
  );
}

export default App;

const BackGroundColor = styled.div`
  background: #000000;
  color: white;
`;
