import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  // State for counter
  const [counter, setCounter] = useState(0); // Default starting value
  const [initialValue, setInitialValue] = useState(''); // User input for initial value
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to increment counter
  const increment = () => setCounter(prev => prev + 1);

  // Function to decrement counter
  const decrement = () => setCounter(prev => prev - 1);

  // Function to reset counter to 0
  const reset = () => setCounter(0); // Reset counter to 0

  // Function to handle Enter key press for setting initial value
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setCounter(Number(initialValue) || 0); // Set counter to the initial value or 0
    }
  };

  // Function to toggle theme
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  // Update body class when theme changes
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <div className="app">
      <div className="counter-container">
        <h1>Counter: {counter}</h1>

        {/* Input field for setting the initial value */}
        <div>
          <label>
            Set Initial Value:
            <input
              type="number"
              value={initialValue}
              onChange={(e) => setInitialValue(e.target.value)}
              onKeyDown={handleKeyPress} // Listen for Enter key
              placeholder="Enter initial value"
            />
          </label>
        </div>

        <div className="button-container">
          <button onClick={increment} className="btn increment">Increment</button>
          <button onClick={decrement} className="btn decrement">Decrement</button>
          <button onClick={reset} className="btn reset">Reset</button>
          <button onClick={toggleTheme} className="btn theme-toggle">
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
