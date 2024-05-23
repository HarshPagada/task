import { useContext, useState } from 'react';
import './App.css';
import ThemeToggle from './components/ThemeToggle';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Axios from './components/Axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Feature from './components/Feature';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Navbar2 from './components/Navbar2';
// import UserProfile from './components/UserProfile';
import Validation from './components/Validation';
import FormData from './components/FormData';
import Usememo from './components/Usememo'
import VirtualizeList from './components/VirtualizeList';
import UserProfile from './components/UserProfile'
import image from '../src/image.png'
import UserProfileContainer from './components/UserProfileContainer'
import ErrorBoundary from './ErrorBoundary';
import DataFetchWrapper from './components/DataFetchWrapper';
import Counter2 from './components/Counter2';
import Child from './components/Child';
import LifeCycle from './components/Lifecycle'
import UseCallback from './components/UseCallback';
import UseImperativeHandle from './components/UseImperativeHandle';
import UseLayoutEffect from './components/UseLayoutEffect';
import UseMemo from './components/Usememo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import DataFetchingComponent from './components/DataFetchingComponent';
import { ThemeProvider, ThemeContext } from './components/ThemeContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
  const [showComponent, setShowComponent] = useState(true);

  const a = <p>I am software engineer</p>

  return (
    <ThemeProvider>
      <AppContent />
      <hr />
      <Counter />
      <hr />
      <FetchData />
      <hr />
      <Axios />
      <hr />

      <BrowserRouter>
        <h3>routes and navigation</h3>
        <Navbar />
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/feature" element={<Feature />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <hr />

      <BrowserRouter>
        <h3>dynamic routes</h3>
        <Navbar2 />
        <Routes>
          <Route>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user/:username" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <hr />
      <Validation />
      <hr />
      <FormData />
      <hr />

      <Usememo />
      <hr />
      <VirtualizeList />

      <UserProfile name='john Deo' bio='Executive manager' avatar='https://via.palceholder.com/150' />
      <hr />
      <UserProfile name='manoj' bio='HR' avatar={image} />
      <hr />
      <hr />
      <hr />
      <UserProfileContainer />
      <ErrorBoundary>
        <UserProfileContainer />
      </ErrorBoundary>
      <hr />
      <p>React concurrent mode and suspense</p>
      <DataFetchWrapper />


      <h1 style={{ textAlign: "center" }}>{a}</h1>
      <Child data={a} />
      <hr />
      <Counter2 />
      <hr />

      <header className="App-header">
        <button onClick={() => setShowComponent(!showComponent)}>
          Toggle Lifecycle Component
        </button>
        {showComponent && <LifeCycle />}
      </header>

      <hr />
      <header className="App-header">
        <DataFetchingComponent />
      </header>



      <UseRef />
      <hr />

      <UseCallback />
      <hr />

      <UseMemo />
      <hr />

      <UseReducer />
      <hr/>

      <UseImperativeHandle/>
      <hr/>
      
      <UseLayoutEffect/>

    </ThemeProvider>


  );
}

export default App;
