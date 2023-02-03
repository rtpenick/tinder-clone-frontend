
import {BrowserRouter,Routes,Route} from 'react-router-dom'

// components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       {/* <Navbar/> */}
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"/dashboard"} element={<Dashboard/>}/>
          <Route path={"/onboarding"} element={<Onboarding/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
