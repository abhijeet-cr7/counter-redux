import './App.css';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import CompOne from './components/CompOne';
import CompTwo from './components/CompTwo';
import CompThree from './components/CompThree';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" exact element={<CompOne />}></Route>
      <Route path="/Two" exact element={<CompTwo />}></Route>
      <Route path="/Three" exact element={<CompThree />}></Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
