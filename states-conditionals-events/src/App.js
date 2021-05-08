import './App.css';
import { useState } from 'react';

const Counter = ({ number }) => {
  return <h1>{number}</h1>;
};

const App = (props) => {
  const [contador, setContador] = useState(0);
  /*
  const contador = useState(5);
  var contadorValue = contador[0];
  var updateContador = contador[1];
  */

  const handleClick = () => {
    setContador(contador + 1);
    // setContador(prevContador => {
    //   return prevContador + 1
    // })
  };
  const handleClickReset = () => {
    setContador(0);
  };

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? 'Es par' : 'Es impar';

  return (
    <div>
      <p>El valor del contador es:</p>
      <Counter number={contador}></Counter>
      <p>{mensajePar}</p>
      <button onClick={handleClick}>Incrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
};

export default App;
