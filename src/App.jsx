import React, { useState } from 'react'

import CalculatorBtn from './Button';
import { ScreenDisplay } from './Screen';

// named export ma chai {} vitra rakhnu
// hook
// component ma matra use huncha and not inside normal function also always starts with use keyword
export const App = () => {
  //let ScreenText = "99999";
  const [ScreenText ,setScreenText] = useState(0);
       const DisplayText = (text) => {
    //ScreenText = text;
    setScreenText(text);
    console.log(ScreenText);
  }
  return (
    <div> 
    <ScreenDisplay text={ScreenText}/>
    <CalculatorBtn text="0" handelClick={()=>DisplayText(0)}/>
    <CalculatorBtn text="1" handelClick={()=>DisplayText(1)}/>
    <CalculatorBtn text="2" handelClick={()=>DisplayText(2)}/>
    <CalculatorBtn text="3" handelClick={()=>DisplayText(3)}/>
    <CalculatorBtn text="4" handelClick={()=>DisplayText(4)}/>
    <CalculatorBtn text="5" handelClick={()=>DisplayText(5)}/>
    <CalculatorBtn text="6" handelClick={()=>DisplayText(6)}/>
    <CalculatorBtn text="7" handelClick={()=>DisplayText(7)}/>
    <CalculatorBtn text="8" handelClick={()=>DisplayText(8)}/>
    <CalculatorBtn text="9" handelClick={()=>DisplayText(9)}/>
    <CalculatorBtn text="+" handelClick={()=>DisplayText("+")}/>
    <CalculatorBtn text="-" handelClick={()=>DisplayText("-")}/>
    <CalculatorBtn text="*" handelClick={()=>DisplayText("*")}/>
    <CalculatorBtn text="/" handelClick={()=>DisplayText("/")}/>
    <CalculatorBtn text="=" handelClick={()=>DisplayText("=")}/>
    <CalculatorBtn text="<-" handelClick={()=>DisplayText("<-")}/>
    <CalculatorBtn text="AC" handelClick={()=>DisplayText("AC")}/>
    <CalculatorBtn text="." handelClick={()=>DisplayText(".")}/>
    <CalculatorBtn text="(" handelClick={()=>DisplayText("(")}/>
    <CalculatorBtn text=")" handelClick={()=>DisplayText(")")}/>
    </div>
  )
}
