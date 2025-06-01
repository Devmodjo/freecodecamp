
import { useEffect, useState } from 'react';
import './App.css'
import type { DisplayProps, ButtonProps } from './interface/Interface';


function App() {
  // small calculator

  const [displayValue, setDisplayValue] = useState("0"); // This would be managed by state in a real application
  const handleButtonClick = (value: string) => {
    // Handle button click logic here
    console.log(`${value} clicked`);

    if(value === "AC") {
      // Reset the display
      // reset display to 0
      setDisplayValue("0");
    }
    else if(value === "=") {
      // evaluation de l'expression
      try{
        setDisplayValue(eval(displayValue).toString());
        console.log("Result:", displayValue);
      } catch(err){
        console.error("Error evaluating expression:", err);
        setDisplayValue("Error");
      }
    }
    else {
      if(displayValue === "0") {
        setDisplayValue(value) ; // Replace 0 with the clicked value
      } else {
        let currentValue = displayValue + value;
        setDisplayValue(currentValue); // Append the clicked value
      }
    }

  };
  
  // Append the clicked value to the display
  useEffect(()=>{
    const displayElement = document.getElementById('Display');
    if(displayElement) {
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
              <Button value="AC" id="clear" onClick={()=>handleButtonClick("AC")} />
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
              <Button value="5" id="five" onClick={() => handleButtonClick("5")}/>
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
              <Button value="0" id="zero"  onClick={() => handleButtonClick("0")} />
            </td>
            <td className='ButtonCell'>
              <Button value="." id="decimal" onClick={() => handleButtonClick(".")} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  )
}

function Display(props: DisplayProps) {
  // Display component to show the value
  return(
    <div id='display'>
      {props.value}
    </div>
  )
}

function Button(props:ButtonProps) {
  // Button component to handle button clicks
  return (
    <button className="Button" onClick={props.onClick} id={props.id}>
      {props.value}
    </button>
  )
}


export default App;
