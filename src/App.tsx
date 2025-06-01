
import { useEffect } from 'react';
import './App.css'
import type { DisplayProps, ButtonProps } from './interface/Interface';


function App() {
  // small calculator

  let displayValue = "0"; // This would be managed by state in a real application
  const handleButtonClick = (value: string) => {
    // Handle button click logic here
    console.log(`${value} clicked`);

    if(value === "AC") {
      // Reset the display
      displayValue = "0";
    }
    else if(value === "=") {
      // evaluation de l'expression
      try{
        displayValue = eval(displayValue).toString();
        console.log("Result:", displayValue);
      } catch(err){
        console.error("Error evaluating expression:", err);
        displayValue = "Error";
      }
    }
    else {

      if(displayValue === "0") {
        displayValue = value; // Replace 0 with the clicked value
      } else {
        displayValue += value; // Append the clicked value
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
              <Button value="AC" id="AC" onClick={()=>handleButtonClick("AC")} />
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
              <Button value="7" id="7" onClick={() => handleButtonClick("7")} />
            </td>
            <td className='ButtonCell'>
              <Button value="8" id="8" onClick={() => handleButtonClick("8")} />
            </td>
            <td className='ButtonCell'>
              <Button value="9" id="9" onClick={() => handleButtonClick("9")} />
            </td>
            <td className='ButtonCell'>
              <Button value="-" id="subtract" onClick={() => handleButtonClick("-")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="4" id="4" onClick={() => handleButtonClick("4")} />
            </td>
            <td className='ButtonCell'>
              <Button value="5" id="5" onClick={() => handleButtonClick("5")}/>
            </td>
            <td className='ButtonCell'>
              <Button value="6" id="6" onClick={() => handleButtonClick("6")} />
            </td>
            <td className='ButtonCell'>
              <Button value="+" id="add" onClick={() => handleButtonClick("+")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="1" id="1" onClick={() => handleButtonClick("1")} />
            </td>
            <td className='ButtonCell'>
              <Button value="2" id="2" onClick={() => handleButtonClick("2")} />
            </td>
            <td className='ButtonCell'>
              <Button value="3" id="3" onClick={() => handleButtonClick("3")} />
            </td>
            <td className='ButtonCell' rowSpan={2}>
              <Button value="=" id="equals" onClick={() => handleButtonClick("=")} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell' colSpan={2}>
              <Button value="0" id="0" onClick={() => handleButtonClick("0")} />
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
    <div id='Display'>
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
