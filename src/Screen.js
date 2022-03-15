import React, { useEffect, useRef, useState } from "react";
import "./Style.css";
import { evaluate } from "mathjs";

export default function Screen() {
  const [expression, setExpression] = useState("");
  const [isExp, setIsExp] = useState(false);
  const [over, setOver] = useState(false);
  let ref = useRef();

  function addFunction(num) {
    setExpression(expression + num);
  }
  function operatorFun(op) {
    if (expression.charAt(expression.length - 1) === op) {
      setIsExp(!isExp);
    }
    setExpression(expression + op);
  }
  function calculate() {
    if (isExp) {
      //for checking Invalid operation.
      setExpression("Invalid operation");
    } else {
      setExpression(evaluate(expression));
      setOver(!over);
    }
  }
  function clearFunction() {
    setExpression("");
    setIsExp(false);
  }
  function specialFunction(sp) {
    //I created this for paranthasis because we can put 2 times(())
    setExpression(expression + sp);
  }
  function delFunction() {
    if (over) {
      setExpression("");
      setOver(false);
    }
    let length = expression.length - 1;
    let slicedOne = expression.slice(0, length);
    setExpression(slicedOne);
  }

  useEffect(function () {
    ref.current.focus();
  }, []);
  return (
    <>
      <div id="container">
        <div id="borderContainer">
          <div id="input">
            {/* <div id="number">{expression}</div> */}
            <input
              id="number"
              type="text"
              ref={ref}
              value={expression}
              onChange={() => {}} //wrote this it is showing warning of because we should not use value without onChange
            />
          </div>
          <div id="buttons">
            <div>
              <button className="op" onClick={() => specialFunction("(")}>
                (
              </button>
              <button className="op" onClick={() => specialFunction(")")}>
                )
              </button>
              <button className="op" onClick={() => delFunction()}>
                DEL
              </button>
              {/* <button className="op" onClick={() => setExpression("")}>
                CE
              </button> */}
              <button className="op" onClick={() => clearFunction()}>
                AC
              </button>
            </div>
            <div>
              <button className="nu" onClick={() => addFunction("7")}>
                7
              </button>
              <button className="nu" onClick={() => addFunction("8")}>
                8
              </button>
              <button className="nu" onClick={() => addFunction("9")}>
                9
              </button>
              <button className="op" onClick={() => operatorFun("/")}>
                /
              </button>
            </div>
            <div>
              <button className="nu" onClick={() => addFunction("4")}>
                4
              </button>
              <button className="nu" onClick={() => addFunction("5")}>
                5
              </button>
              <button className="nu" onClick={() => addFunction("6")}>
                6
              </button>
              <button className="op" onClick={() => operatorFun("*")}>
                *
              </button>
            </div>
            <div>
              <button className="nu" onClick={() => addFunction("1")}>
                1
              </button>
              <button className="nu" onClick={() => addFunction("2")}>
                2
              </button>
              <button className="nu" onClick={() => addFunction("3")}>
                3
              </button>
              <button className="op" onClick={() => operatorFun("-")}>
                -
              </button>
            </div>
            <div>
              <button className="nu" onClick={() => addFunction("0")}>
                0
              </button>
              <button className="nu" onClick={() => addFunction(".")}>
                .
              </button>
              <button
                className="nu"
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={calculate}
              >
                =
              </button>
              <button className="op" onClick={() => operatorFun("+")}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
