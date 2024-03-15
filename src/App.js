import AboutComponent from "./components/AboutComponent";
import HeadComponent from "./components/HeadComponent";
import { BrowserRouter as Router, Route, Link, Switch, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HeadComponent/>}></Route>
          <Route path="/about" element={<AboutComponent/>}></Route>
        </Routes>
      </Router>
      {/* <HeadComponent></HeadComponent> */}
      {/* <AboutComponent></AboutComponent> */}
    </div>
  );
}

export default App;
