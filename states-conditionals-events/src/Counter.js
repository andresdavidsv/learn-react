import './App.css';
import { useState } from 'react';

const WarningNotUsed = () => {
  return <h1>Todavia no se ha usado el componente</h1>;
};

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(', ')}</p>;
};

const INITIAL_COUNTER_STATE = {
  left: 0,
  right: 0,
};

const App = (props) => {
  // const [left, setLeft] = useState(0);
  // const [right, setRight] = useState(0);
  const [counters, setCounters] = useState(INITIAL_COUNTER_STATE);

  const [clicks, setClicks] = useState([]);

  const handleClickLeft = () => {
    const newCounterState = {
      ...counters,
      left: counters.left + 1,
    };
    setCounters(newCounterState);
    setClicks((prevClicks) => {
      return [...prevClicks, 'L'];
    });
  };
  const handleClickRight = () => {
    setCounters({
      ...counters,
      right: counters.right + 1,
    });
    setClicks((prevClicks) => {
      return [...prevClicks, 'R'];
    });
  };
  const handleClickReset = () => {
    setCounters(INITIAL_COUNTER_STATE);
    setClicks([]);
  };
  return (
    <div>
      {counters.left}
      <button onClick={handleClickLeft}>left</button>
      <button onClick={handleClickRight}>left</button>
      {counters.right}
      <p>
        <button onClick={handleClickReset}>Reset</button>
      </p>
      <p>Clicks totales: {clicks.length}</p>
      {clicks.length === 0 ? (
        <WarningNotUsed />
      ) : (
        <ListOfClicks clicks={clicks} />
      )}
    </div>
  );
};

export default App;
