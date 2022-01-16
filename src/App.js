import React, {useState} from 'react'

function App() {
    const [result, setResult] = useState("");

    const click = (e) => {
        setResult(result.concat(e.target.name));
    }
    const Clear = () => {
        setResult("");
    }
    const back = () => {
        setResult(result.slice(0, -1));
    }
    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch(err) {
            setResult("ERROR");
        }
    }
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            </head>
            <div>
                <div className='container'>
                    <form>
                        <input className='input' type="text" value={result} />
                    </form>
                    <div className='keypad'>
                        <button className='highlight clear' onClick={Clear}>Clear</button>
                        <button className='highlight' onClick={back}>&larr;</button>
                        <button className='highlight' onClick={click} name='/'><b>&divide;</b></button>
                        <button name='7' onClick={click}>7</button>
                        <button name='8' onClick={click}>8</button>
                        <button name='9' onClick={click}>9</button>
                        <button className='highlight' name='*' onClick={click}><>&times;</></button>
                        <button name='4' onClick={click}>4</button>
                        <button name='5' onClick={click}>5</button>
                        <button name='6' onClick={click}>6</button>
                        <button className='highlight' name='-' onClick={click}>&ndash;</button>
                        <button name='1' onClick={click}>1</button>
                        <button name='2' onClick={click}>2</button>
                        <button name='3' onClick={click}>3</button>
                        <button className='highlight' name='+' onClick={click}>+</button>
                        <button name='0' onClick={click}>0</button>
                        <button name='.' onClick={click}>.</button>
                        <button className='highlight equal'  name='=' onClick={calculate}>=</button>
                        <a className='github' href='https://github.com/sarath1405/calculator' target="_blank">
                            <i class="fa fa-github"></i>
                            <span> GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
