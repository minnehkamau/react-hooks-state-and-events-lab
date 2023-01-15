import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [darkMode, setdarkMode] = useState(false);

  function handleDarkModeClick() {
    setdarkMode((darkMode) => !darkMode);
  }
const appClass = darkMode? "App dark" : "App light";
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
