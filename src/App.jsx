import React, { useState } from 'react'

import CalculatorBtn from './Button';
import { ScreenDisplay } from './Screen';

// named export ma chai {} vitra rakhnu
// hook
// component ma matra use huncha and not inside normal function also always starts with use keyword
const Utility ={
CLEAR : "CLEAR",
BACK : "BACK",
}
export const App = () => {
  const [ScreenText ,setScreenText] = useState("");
       const DisplayText = (text) => {
    if(text===Utility.CLEAR){
      setScreenText("")
    }
    else if(text===Utility.BACK){
      setScreenText((prev) => {
        return prev.slice(0, prev.length-1)
      })
    }
    else{
    setScreenText((prev) => {
    return prev+text;
  });
}
}
  return (
    <div className = "calculator">
    <h1>Calculator</h1>
    <ScreenDisplay text={ScreenText}/>
    <div>
    <CalculatorBtn text="0" handelClick={()=>DisplayText(0)}/>
    <CalculatorBtn text="1" handelClick={()=>DisplayText(1)}/>
    <CalculatorBtn text="2" handelClick={()=>DisplayText(2)}/>
    <CalculatorBtn text="3" handelClick={()=>DisplayText(3)}/>
    </div>
    <div>
    <CalculatorBtn text="4" handelClick={()=>DisplayText(4)}/>
    <CalculatorBtn text="5" handelClick={()=>DisplayText(5)}/>
    <CalculatorBtn text="6" handelClick={()=>DisplayText(6)}/>
    <CalculatorBtn text="7" handelClick={()=>DisplayText(7)}/>
    </div>
    
    <div>
    <CalculatorBtn text="8" handelClick={()=>DisplayText(8)}/>
    <CalculatorBtn text="9" handelClick={()=>DisplayText(9)}/>
    <CalculatorBtn text="+" handelClick={()=>DisplayText("+")}/>
    <CalculatorBtn text="-" handelClick={()=>DisplayText("-")}/>
    </div>
    <div>
    <CalculatorBtn text="*" handelClick={()=>DisplayText("*")}/>
    <CalculatorBtn text="/" handelClick={()=>DisplayText("/")}/>
    <CalculatorBtn text="=" handelClick={()=>DisplayText("=")}/>
    <CalculatorBtn text="<-" handelClick={()=>DisplayText(Utility.BACK)}/>
    </div>
    <div>
    <CalculatorBtn text="C" handelClick={()=>DisplayText(Utility.CLEAR)}textcolor="#ff0000"/>
    <CalculatorBtn text="." handelClick={()=>DisplayText(".")}/>
    <CalculatorBtn text="(" handelClick={()=>DisplayText("(")}/>
    <CalculatorBtn text=")" handelClick={()=>DisplayText(")")}/>
    </div>
    </div>
  )
}
