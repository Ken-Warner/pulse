import { useState, useEffect } from "react";
import { getCurrentNumber } from "./utilities/api";

function App() {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    async function requestGetCurrentNumber() {
      const apiResult = await getCurrentNumber();
      if (apiResult.ok) {
        setCurrentNumber(apiResult.body.latestNumber);
      }
    }
    requestGetCurrentNumber();
  }, []);

  function handleButtonClick() {
    async function requestGetCurrentNumber() {
      const apiResult = await getCurrentNumber();
      if (apiResult.ok) {
        setCurrentNumber(apiResult.body.latestNumber);
      }
    }
    requestGetCurrentNumber();
  }

  return (
    <>
      <h1>Hello World!</h1>
      <p>🚧Pulse🚧</p>
      <button onClick={handleButtonClick}>
        {currentNumber}: number of times api has been called.
      </button>
      <p>Environment Variable: {import.meta.env.VITE_API_URL}</p>
    </>
  );
}

export default App;
