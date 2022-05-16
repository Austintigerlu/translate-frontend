import {useState} from 'react';
import Textbox from "../components/translate/Textbox";
import Swap from '../components/translate/Swap';
import './Translate.css';


function Translate() {
  const [inputLanguage, setInputLanguage] = useState("en");
  const [outputLanguage, setOutputLanguage] = useState("en");

  function swapLanguage() {
    setInputLanguage(outputLanguage);
    setOutputLanguage(inputLanguage);
  }
  console.log(inputLanguage)
  console.log(outputLanguage)
  return (
    <div className='translate'>
      <Textbox selectedLanguage={setInputLanguage} className='input'/>
      <button className='swap-container' onClick={swapLanguage}>  
        <Swap/>
      </button>
      <Textbox selectedLanguage={setOutputLanguage} className='output'/>
    </div>
  ) 
}
  
  export default Translate;