
import './App.css'
import type { DisplayProps, ButtonProps } from './interface/Interface';


function App() {
  // small calculator

  const displayValue = "0"; // This would be managed by state in a real application
  const handleButtonClick = (value: string) => {
    // Handle button click logic here
    console.log(`${value} clicked`);
    

  };

  return (
    <div className='App'>
      <Display value={displayValue} />
      <div className='ButtonContainer'>
        <table>
          <tr>
            <td className='ButtonCell' colSpan={2}>
              <Button value="AC" id="AC" onClick={() => console.log('AC clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="/" id="divide" onClick={() => console.log('divide clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="*" id="multiply" onClick={() => console.log('multiply clicked')} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="7" id="7" onClick={() => console.log('7 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="8" id="8" onClick={() => console.log('8 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="9" id="9" onClick={() => console.log('9 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="-" id="subtract" onClick={() => console.log('subtract clicked')} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="4" id="4" onClick={() => console.log('4 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="5" id="5" onClick={() => console.log('5 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="6" id="6" onClick={() => console.log('6 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="+" id="add" onClick={() => console.log('add clicked')} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell'>
              <Button value="1" id="1" onClick={() => console.log('1 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="2" id="2" onClick={() => console.log('2 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="3" id="3" onClick={() => console.log('3 clicked')} />
            </td>
            <td className='ButtonCell' rowSpan={2}>
              <Button value="=" id="equals" onClick={() => console.log('equals clicked')} />
            </td>
          </tr>
          <tr>
            <td className='ButtonCell' colSpan={2}>
              <Button value="0" id="0" onClick={() => console.log('0 clicked')} />
            </td>
            <td className='ButtonCell'>
              <Button value="." id="decimal" onClick={() => console.log('decimal clicked')} />
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


export default App
