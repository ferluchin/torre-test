// filename: App.js

import './App.css';
import { AppProvider } from "./context/AppContext";
import  UserProfile  from "./components/UserProfile";
import "./App.css";

function App() {
  return (
    < AppProvider>
    <div className="App">
      <UserProfile />
    </div>
    </AppProvider>
  );
}

export default App;
