
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './screens/Home';
import Navbar from './components/Navbar';
import { RecoilRoot } from 'recoil';
import Dashboard from './screens/Dashboard';
import Class from './screens/Class';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<><Navbar /> <Dashboard /></>} />
            <Route exact path="/class/:id" element={<><Navbar /> <Class /></>} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

export default App;
