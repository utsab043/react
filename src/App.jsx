import React, { useState } from "react";

import CalculatorBtn from "./Button";
import { ScreenDisplay } from "./Screen";

// named export ma chai {} vitra rakhnu
// hook
// component ma matra use huncha and not inside normal function also always starts with use keyword
const Utility = {
  CLEAR: "CLEAR",
  BACK: "BACK",
  ADD: "+",
  SUB: "-",
  MUL: "*",
  DIVE: "/",
  PER: "%",
  DOT: ".",
};
export const App = () => {
  const [ScreenText, setScreenText] = useState("");
  const [hasOperator, setHasOperator] = useState(false);
  const DisplayText = (text) => {
    if (text === Utility.CLEAR) {
      setScreenText("");
      return;
    }

    if (text === Utility.BACK) {
      setScreenText((prev) => {
        return prev.slice(0, prev.length - 1);
      });
      return;
    }

    if (
      (text === Utility.ADD ||
        text === Utility.SUB ||
        text === Utility.DIVE ||
        text === Utility.MUL ||
        text === Utility.DOT ||
        text === Utility.PER) &&
      !hasOperator
    ) {
      setHasOperator(true);
    }

    if (
      !(
        text === Utility.ADD ||
        text === Utility.SUB ||
        text === Utility.DIVE ||
        text === Utility.MUL ||
        text === Utility.DOT ||
        text === Utility.PER
      ) &&
      hasOperator
    ) {
      setHasOperator(false);
    }

    if (
      (text === Utility.ADD ||
        text === Utility.SUB ||
        text === Utility.DIVE ||
        text === Utility.MUL ||
        text === Utility.DOT ||
        text === Utility.PER) &&
      hasOperator
    ) {
      return;
    }

    setScreenText((prev) => prev + text);
  };
  const showResult = () => {
    setScreenText(eval(ScreenText));
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <ScreenDisplay text={ScreenText} />
      <div>
        <CalculatorBtn
          text="AC"
          handelClick={() => DisplayText(Utility.CLEAR)}
          bgcolor="#ff000099"
        />
        <CalculatorBtn
          text="DEL"
          handelClick={() => DisplayText(Utility.BACK)}
          bgcolor="#00800099"
        />
        <CalculatorBtn
          text="%"
          handelClick={() => DisplayText(Utility.PER)}
          bgcolor="#00800099"
        />
        <CalculatorBtn
          text="/"
          handelClick={() => DisplayText(Utility.DIVE)}
          bgcolor="#00800099"
        />
      </div>
      <div>
        <CalculatorBtn text="7" handelClick={() => DisplayText(7)} />
        <CalculatorBtn text="8" handelClick={() => DisplayText(8)} />
        <CalculatorBtn text="9" handelClick={() => DisplayText(9)} />
        <CalculatorBtn
          text="*"
          handelClick={() => DisplayText(Utility.MUL)}
          bgcolor="#00800099"
        />
      </div>

      <div>
        <CalculatorBtn text="4" handelClick={() => DisplayText(4)} />
        <CalculatorBtn text="5" handelClick={() => DisplayText(5)} />
        <CalculatorBtn text="6" handelClick={() => DisplayText(6)} />
        <CalculatorBtn
          text="-"
          handelClick={() => DisplayText(Utility.SUB)}
          bgcolor="#00800099"
        />
      </div>
      <div>
        <CalculatorBtn text="1" handelClick={() => DisplayText(1)} />
        <CalculatorBtn text="2" handelClick={() => DisplayText(2)} />
        <CalculatorBtn text="3" handelClick={() => DisplayText(3)} />
        <CalculatorBtn
          text="+"
          handelClick={() => DisplayText(Utility.ADD)}
          bgcolor="#00800099"
        />
      </div>
      <div>
        <CalculatorBtn text="00" handelClick={() => DisplayText("00")} />
        <CalculatorBtn text="0" handelClick={() => DisplayText(0)} />
        <CalculatorBtn text="." handelClick={() => DisplayText(Utility.DOT)} />
        <CalculatorBtn text="=" handelClick={showResult} bgcolor="#FFA50099" />
      </div>
    </div>
  );
};
