import { useContext } from 'react';
import './App.css';
import { ThemeProvider, ThemeContext } from './component/ThemeContext';
import ThemeToggle from './component/ThemeToggle';
import Counter from './component/Counter';
import FetchData from './component/FetchData';
import Axios from './component/Axios';


const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme}`}>
      <ThemeToggle />
      <h1>Hello, Theme Switcher!</h1>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />

      <hr />
      <Counter />
      <hr />

      <FetchData />
      <hr />

      <Axios />
    </ThemeProvider>

  );
}

export default App;
