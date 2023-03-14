import logo from "./logo.svg";
import Container from "./components/Container";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Footer from "./components/Footer";
import Buttons from "./components/Buttons";
import React, { useState } from "react";

const btnValues = [
  ["C", "+/-", "%", "÷"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  // Assign default state to variable needed all through the app
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });
  // Assign default state to variable needed all through the app

  // Reset Button
  const resetValueHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };
  // Reset Button

  // Function to add Number Clicked on to Screen
  const numValueHandler = (e) => {
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  };
  // Function to add Number Clicked on to Screen

  //  Inverse Function
  const invertValueHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * -1 : 0,
      sign: "",
    });
  };
  // Inverse Function

  // Percentage Function
  const percentValueHandler = () => {
    let num = calc.num ? parseFloat(calc.num) : 0;
    let res = calc.res ? parseFloat(calc.res) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };
  // Percentage Function

  // Decimal Point Function
  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,

      num:
        // if current number does not a decimal point
        !calc.num.toString().includes(".")
          ? // add entered value after decimal point
            calc.num + value
          : // else return the current number
            calc.num,
    });
  };
  // Decimal Point Function

  // Operator Sign Function
  const operatorHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };
  // Operator Sign Function

  // Calculate Function
  const calculateValueHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "÷"
            ? "Can't divide with 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: 0,
      });
    }
  };
  // Calculate Function

  return (
    <Container>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Buttons
              key={i}
              className={
                // Assign right CSS class to appropriate buttons
                btn === "=" ||
                btn === "÷" ||
                btn === "x" ||
                btn === "-" ||
                btn === "+"
                  ? "color"
                  : btn === "C" || btn === "+/-" || btn === "%"
                  ? "light"
                  : btn === 0
                  ? "large"
                  : ""
              }
              value={btn}
              onClick={
                // Assign appropriate function to respective button
                btn === "C"
                  ? resetValueHandler
                  : btn === "+/-"
                  ? invertValueHandler
                  : btn === "%"
                  ? percentValueHandler
                  : btn === "="
                  ? calculateValueHandler
                  : btn === "÷" || btn === "x" || btn === "-" || btn === "+"
                  ? operatorHandler
                  : btn === "."
                  ? commaClickHandler
                  : numValueHandler
              }
            />
          );
        })}
      </ButtonBox>
      <Footer className="link" link="https://github.com/Ola-toyosi/" title=" Ola Oluwatoyosi"/>
    </Container>
  );
}

export default App;
