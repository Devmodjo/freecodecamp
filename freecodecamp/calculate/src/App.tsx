
import { useEffect, useState } from 'react';

import type { DisplayProps, ButtonProps } from './interface/Interface';
import './App.css';

function App() {
  const [displayValue, setDisplayValue] = useState("0");
  const [expression, setExpression] = useState("");
  const [evaluated, setEvaluated] = useState(false);

  const isOperator = /[*/+\-]/;

  const handleButtonClick = (value: string) => {

    console.log(`${value} clicked`);

    if (value === "AC") {
      setDisplayValue("0");
      setExpression("");
      setEvaluated(false);
      return;
    }

    if (value === "=") {
      let exp = expression;

      // Remove trailing operator if any
      if (/[*/+\-]$/.test(exp)) exp = exp.slice(0, -1);

      try {
        const result = eval(exp);
        const rounded = parseFloat(result.toFixed(12)).toString();
        setDisplayValue(rounded);
        setExpression(exp + "=" + rounded);
        setEvaluated(true);
      } catch (err) {
        console.error("Error evaluating expression:", err);
        setDisplayValue("Error");
        setEvaluated(true);
      }
      return;
    }

    if (value === ".") {
      const parts = expression.split(/[\+\-\*/]/);
      const lastNumber = parts[parts.length - 1];
      if (lastNumber.includes(".")) return;
    }

    if (evaluated && /[0-9.]/.test(value)) {
      setExpression(value === "." ? "0." : value);
      setDisplayValue(value === "." ? "0." : value);
      setEvaluated(false);
      return;
    }

    if (evaluated && isOperator.test(value)) {
      setExpression(displayValue + value);
      setDisplayValue(value);
      setEvaluated(false);
      return;

    }


    if (isOperator.test(value)) {
      if (expression === "" && value !== "-") return;
      if (isOperator.test(expression.slice(-1))) {
        if (value === "-" && expression.slice(-1) !== "-") {
          setExpression(expression + value);
        } else {
          const replaced = expression.replace(/[*/+\-]+$/, value);
          setExpression(replaced);
        }
      } else {
        setExpression(expression + value);
      }
      setDisplayValue(value);
      return;
    }

    if (displayValue === "0" && value === "0") return;

    if (expression === "" || displayValue === "0" || /[*/+\-=]/.test(displayValue)) {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }

    setExpression(expression + value);
  };

  useEffect(() => {
    const displayElement = document.getElementById('Display');
    if (displayElement) {
      displayElement.textContent = displayValue;
    }
  }, [displayValue]);

  return (
    <div className='App'>
      <Display value={displayValue} />
      <div className='ButtonContainer'>
        <table>
          <tr>
            <td className='ButtonCell' colSpan={2}>
              <Button value="AC" id="clear" onClick={() => handleButtonClick("AC")} />
            </td>
            <td className='ButtonCell'>
              <Button value="/" id="divide" onClick={() => handleButtonClick("/")} />
            </td>
            <td className='ButtonCell'>
              <Button value="*" id="multiply" onClick={() => handleButtonClick("*")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="7" id="seven" onClick={() => handleButtonClick("7")} />
            </td>
            <td className='ButtonCell'>
              <Button value="8" id="eight" onClick={() => handleButtonClick("8")} />
            </td>
            <td className='ButtonCell'>
              <Button value="9" id="nine" onClick={() => handleButtonClick("9")} />
            </td>
            <td className='ButtonCell'>
              <Button value="-" id="subtract" onClick={() => handleButtonClick("-")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="4" id="four" onClick={() => handleButtonClick("4")} />
            </td>
            <td className='ButtonCell'>
              <Button value="5" id="five" onClick={() => handleButtonClick("5")} />
            </td>
            <td className='ButtonCell'>
              <Button value="6" id="six" onClick={() => handleButtonClick("6")} />
            </td>
            <td className='ButtonCell'>
              <Button value="+" id="add" onClick={() => handleButtonClick("+")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="1" id="one" onClick={() => handleButtonClick("1")} />
            </td>
            <td className='ButtonCell'>
              <Button value="2" id="two" onClick={() => handleButtonClick("2")} />
            </td>
            <td className='ButtonCell'>
              <Button value="3" id="three" onClick={() => handleButtonClick("3")} />
            </td>
            <td className='ButtonCell' rowSpan={2}>
              <Button value="=" id="equals" onClick={() => handleButtonClick("=")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell' colSpan={2}>
              <Button value="0" id="zero" onClick={() => handleButtonClick("0")} />
            </td>
            <td className='ButtonCell'>
              <Button value="." id="decimal" onClick={() => handleButtonClick(".")} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

function Display(props: DisplayProps) {
  return (
    <div id='display'>
      {props.value}
    </div>
  );
}

function Button(props: ButtonProps) {
  return (
    <button className="Button" onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  );
}


export default App;
