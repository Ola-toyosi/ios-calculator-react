import logo from "./logo.svg";
import Container from "./components/Container";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Buttons from "./components/Buttons";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <Container>
      <Screen value="0" />
      <ButtonBox>
        {/* <Buttons 
            className=""
            value="0"
            onClick={() => {
              console.log("Button clicked!");
            }}
          /> */}
        {btnValues.flat().map((btn, i) => {
          return (
            <Buttons
              key={i}
              className={
                (btn === "=" ||
                btn === "/" ||
                btn === "x" ||
                btn === "-" ||
                btn === "+"
                  ? "color"
                  : "" ) ||
                (btn === "C" || btn === "+-" || btn === "%"
                  ? "light"
                  : "") || (btn === 0 ? "large" : "")
              }
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked!`);
              }}
            />
          );
        })}
      </ButtonBox>
    </Container>
  );
}

export default App;
