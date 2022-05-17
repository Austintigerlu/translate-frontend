// Components
import Header from "./components/Header";
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom";

// Pages
import IM from "./pages/IM";
import Main from "./pages/Main";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Translate from "./pages/Translate"

import './App.css';

function App() {
  const URL= "https://pure-savannah-85557.herokuapp.com/"
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="/IM" element={<IM URL={URL}/>}/>
        <Route path="/register" element={<Register URL={URL}/>}/>
        <Route path="/login" element={<Login URL={URL}/>}/>
        <Route path="/translate" element={<Translate URL={URL}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
