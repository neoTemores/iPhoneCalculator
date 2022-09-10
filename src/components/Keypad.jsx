import { calculateNewValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react'

function Keypad({ display, setDisplay }) {

    const [memory, setMemory] = useState(0);
    const [lastNum, setLastNum] = useState(0)
    const [currentOperator, setCurrentOpeator] = useState('')
    const [calculated, setCalculated] = useState(false)

    const handleClickedSpecial = (e) => {
        let special = e.target.id

        switch (special) {
            case "AC":
                setMemory(0)
                setDisplay(0)
                setLastNum(0)
                setCalculated(false)
                break;
            case "+-":
                return setDisplay((prevDisplay) => {
                    return prevDisplay * -1
                })
            case "%":
                return setDisplay((prevDisplay) => {
                    return prevDisplay / 100
                })
            default:
                setMemory(0)
                setDisplay(0)
                setLastNum(0)
                setCalculated(false)
        }
    }

    const handleClickedOperator = (e) => {
        let operator = e.target.id

        switch (operator) {
            case "+":
                setCurrentOpeator('+')
                if (memory == 0) {
                    return setMemory(display)
                }

                if (calculated) {
                    return setCalculated(false)
                }

                else {
                    setDisplay(() => {
                        return +memory + +display
                    })

                    setMemory(+memory + +display)

                }
                break;

            case "-":
                setCurrentOpeator('-')
                if (+memory == 0) {
                    return setMemory(display)
                }

                if (calculated) {
                    return setCalculated(false)
                }

                else {
                    setDisplay(() => {
                        return +memory - +display
                    })

                    setMemory(+memory - +display)

                }
                break;

            case "*":
                setCurrentOpeator('*')
                if (memory == 0) {
                    return setMemory(display)
                }

                if (calculated) {
                    return setCalculated(false)
                }

                else {
                    setDisplay(() => {
                        return +memory * +display
                    })

                    setMemory(+memory * +display)

                }
                break;
            case "/":
                setCurrentOpeator('/')
                if (memory == 0) {
                    return setMemory(display)
                }

                if (calculated) {
                    return setCalculated(false)
                }

                else {
                    setDisplay(() => {
                        return +memory / +display
                    })

                    setMemory(+memory / +display)

                }
                break;

            case "=":
                return calculate()

            default:
                setMemory(0)
                setDisplay(0)
                setLastNum(0)
                setCalculated(false)
        }
    }

    const calculate = () => {
        setCalculated(true)
        switch (currentOperator) {
            case '+':
                setDisplay(+memory + lastNum)
                setMemory(+memory + lastNum)
                break;

            case '-':
                setDisplay(+memory - lastNum)
                setMemory(+memory - lastNum)
                break;

            case '*':
                setDisplay(+memory * lastNum)
                setMemory(+memory * lastNum)
                break;
            case '/':
                setDisplay(+memory / lastNum)
                setMemory(+memory / lastNum)
                break;

            default:
                setMemory(0)
                setDisplay(0)
                setLastNum(0)
                setCalculated(false)
        }
    }

    const handleClickedNum = (e) => {
        let num = e.target.id
        if (num === '.' && display.includes('.')) { return }
        setLastNum(+num)
        if (memory != 0) { setDisplay(0) }

        setDisplay((prevDisplay) => {
            return prevDisplay == 0 ? num : prevDisplay + num
        })

    }

    return (
        <div className='keypad'>

            <button id="AC" className="keypadBtn keypadSpecial" onClick={handleClickedSpecial}>AC</button>
            <button id="+-" className="keypadBtn keypadSpecial" onClick={handleClickedSpecial}> + / - </button>
            <button id="%" className="keypadBtn keypadSpecial" onClick={handleClickedSpecial}> % </button>
            <button id="/" className="keypadBtn keypadOperator" onClick={handleClickedOperator}>÷</button>

            <button id={7} className="keypadBtn keypadNumber" onClick={handleClickedNum}>7</button>
            <button id={8} className="keypadBtn keypadNumber" onClick={handleClickedNum}>8</button>
            <button id={9} className="keypadBtn keypadNumber" onClick={handleClickedNum}>9</button>
            <button id="*" className="keypadBtn keypadOperator" onClick={handleClickedOperator}>X</button>

            <button id={4} className="keypadBtn keypadNumber" onClick={handleClickedNum}>4</button>
            <button id={5} className="keypadBtn keypadNumber" onClick={handleClickedNum}>5</button>
            <button id={6} className="keypadBtn keypadNumber" onClick={handleClickedNum}>6</button>
            <button id="-" className="keypadBtn keypadOperator" onClick={handleClickedOperator}>-</button>

            <button id={1} className="keypadBtn keypadNumber" onClick={handleClickedNum}>1</button>
            <button id={2} className="keypadBtn keypadNumber" onClick={handleClickedNum}>2</button>
            <button id={3} className="keypadBtn keypadNumber" onClick={handleClickedNum}>3</button>
            <button id="+" className="keypadBtn keypadOperator" onClick={handleClickedOperator}>+</button>

            <button id={0} className="keypadBtn keypadNumber span2" onClick={handleClickedNum}>0</button>
            <button id="." className="keypadBtn keypadNumber" onClick={handleClickedNum}>.</button>
            <button id="=" className="keypadBtn keypadOperator" onClick={handleClickedOperator}>=</button>
        </div>
    )
}

export default Keypad