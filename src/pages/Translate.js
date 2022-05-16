import {useState} from 'react';
import Textbox from "../components/translate/Textbox";
import Swap from '../components/translate/Swap';
import './Translate.css';



function Translate() {
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("es");

  function swapLanguage() {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }
  return (
    <div className='translate'>
      <Textbox selectedLanguage={inputLanguage} className='input'/>
      <button className='swap-container' onClick={swapLanguage}>  
        <Swap/>
      </button>
      <Textbox selectedLanguage={outputLanguage} className='output'/>
    </div>
  ) 
}
  
  export default Translate;