import {useState} from 'react';
import Textbox from "../components/translate/Textbox";
import Swap from '../components/translate/Swap';
import './Translate.css';
import axios from "axios";

function Translate() {
  const [inputLanguage, setInputLanguage] = useState("af");
  const [outputLanguage, setOutputLanguage] = useState("af");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  // function swapLanguage() {
  //   setInputLanguage(outputLanguage);
  //   setOutputLanguage(inputLanguage);
  // }

  console.log(inputLanguage)
  console.log(outputLanguage)
  
  function translateText(){
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", textToTranslate);
    encodedParams.append("target", outputLanguage);
    encodedParams.append("source", inputLanguage);

    const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      'X-RapidAPI-Key': '3c5a11d66bmsh65e83ecaec2e36ap1cec7djsn9c8049b07f5c'
    },
    data: encodedParams
  };

    axios.request(options).then(function (response) {
      setTranslatedText(response.data.data.translations[0].translatedText);
    }).catch(function (error) {
      console.error(error);
    });
  }
  console.log(translatedText)

  return (
    <div className='translate'>
      <Textbox 
        selectedLanguage={setInputLanguage} 
        className='input'
        textToTranslate={textToTranslate} 
        setText={setTextToTranslate} 
        setTranslatedText={setTranslatedText}
      />
      <button className='swap-container'>  
        <Swap/>
      </button>
      <Textbox 
        selectedLanguage={setOutputLanguage} 
        translatedText={translatedText} 
   
        className='output'
      />
      <div className='translateButton'>
        <button onClick={translateText}>Translate</button>
      </div>
    </div>
  ) 
}
  
  export default Translate;