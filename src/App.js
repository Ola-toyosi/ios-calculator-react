import logo from './logo.svg';
import Container from "./components/Container";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Buttons from "./components/Buttons";

function App() {
  return (
    <Container>
        <Screen value="0"/>
        <ButtonBox>
          <Buttons 
            className=""
            value="0"
            onClick={() => {
              console.log("Button clicked!");
            }}
          />
        </ButtonBox>
    </Container>
  );
}

export default App;
