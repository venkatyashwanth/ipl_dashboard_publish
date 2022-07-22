// import {BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TeamMatches from "./components/TeamMatches";
import NotFound from "./components/NotFound";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/teamMatches/:id" element={<TeamMatches/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
