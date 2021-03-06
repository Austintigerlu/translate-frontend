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

import {useState} from "react";
import UpdateProfile from "./pages/UpdateProfile";



function App() {
  const URL= "https://pure-savannah-85557.herokuapp.com/"
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="App">
      <Header URL={URL} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route path="IM/" element={<IM URL={URL}  currentUser={currentUser}/>}/>
        <Route path="/register" element={<Register URL={URL}/>}/>
        <Route path="/login" element={<Login URL={URL}  setCurrentUser={setCurrentUser}/>}/>
        <Route path="/translate" element={<Translate URL={URL} currentUser={currentUser}/>}/>
        <Route path='/updateprofile' element={<UpdateProfile URL={URL} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
