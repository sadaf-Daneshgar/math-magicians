import React from 'react';
import './style.css';
import InputNumber from './Button';

function Calculator() {
  return (
    <>
      <div className="container">
        <InputNumber className="numInput" value="0" />
        <div className="rows-contanier">
          <div className="horizontal-rows">
            <button className="num-buttons" type="button">
              AC
            </button>
            <button className="num-buttons" type="button">
              +/-
            </button>
            <button className="num-buttons" type="button">
              %
            </button>
            <button className="sign-btn" type="button">
              +
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-buttons" type="button">
              7
            </button>
            <button className="num-buttons" type="button">
              8
            </button>
            <button className="num-buttons" type="button">
              9
            </button>
            <button className="sign-btn" type="button">
              *
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-buttons" type="button">
              4
            </button>
            <button className="num-buttons" type="button">
              5
            </button>
            <button className="num-buttons" type="button">
              6
            </button>
            <button className="sign-btn" type="button">
              -
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-buttons" type="button">
              1
            </button>
            <button className="num-buttons" type="button">
              2
            </button>
            <button className="num-buttons" type="button">
              3
            </button>
            <button className="sign-btn" type="button">
              +
            </button>
          </div>
          <div className="horizontal-rows">
            <button className="num-zero" type="button">
              0
            </button>
            <button className="num-buttons" type="button">
              .
            </button>
            <button className="sign-btn" type="button">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
