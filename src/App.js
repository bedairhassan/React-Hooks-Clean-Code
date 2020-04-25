import React, { useState } from 'react';

import './App.css';

const Input = ({placeholder,backk}) => {

  return (
    <React.Fragment>

      <input
        placeholder={placeholder}
        onChange={(e) => backk(e.target.value)}
      /> <br/>
    </React.Fragment>
  )
}

const Button = ({name,onClick,send}) => {

  const Sum = ({ a, b }) => parseInt(parseInt(a) + parseInt(b))

  return (

    <React.Fragment>

      <button
        onClick={() => onClick(Sum({ a: send.a, b: send.b }))}
      >{name}</button>
    </React.Fragment>
  )
}

const Display = ({header,string}) => { // props : {header,string} // const props = {header,string}

  return (
    <React.Fragment>
      {/* <h1>{header}</h1>
      {
        (parseInt(string) !== -1) ?
          (<h2>{string}</h2>) : (<h6>Waiting for user input</h6>)
      } */}

      {/* programmer 2 */}
            
      {/* <h1>{header}</h1>
      {
        (parseInt(string)!==-1) && (<h2>{string}</h2>)
      } */}

      {/* programmer 3 - this the most smart guy */}

    <h1>{header}</h1>

    {

    string!==`#` && <h2>{string}</h2>
    }

    </React.Fragment>
  )
}

const App = () => {

  const [a, setA] = useState(-1) // const [getter,setter] = useState(default_value)
  const [b, setB] = useState(-1)
  const [result, setResult] = useState(`#`)

  return (
    <React.Fragment>

      <Input backk={input => setA(input)} placeholder={`Enter a`} />
      <Input backk={input => setB(input)} placeholder={`Enter b`} />

      <Button onClick={result => { setResult(result) }} name={`Submit Results`} send={{ a, b }} />

      <Display header={`Sum is: `} string={result} />

    </React.Fragment>
  );
}

export default App;
