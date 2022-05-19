import {useState} from 'react';
import Textbox from "../components/translate/Textbox";
import Swap from '../components/translate/Swap';
import './Translate.css';
import axios from "axios";
import SavedTranslations from '../components/translate/SavedTranslations';

function Translate(props){
  const [inputLanguage, setInputLanguage] = useState("af");
  const [outputLanguage, setOutputLanguage] = useState("af");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [err, setErr] = useState(null)

  // function swapLanguage() {
  //   setInputLanguage(outputLanguage);
  //   setOutputLanguage(inputLanguage);
  // }

  console.log(inputLanguage)
  console.log(outputLanguage)
  async function handleSave(){
    const newTranslation = {
      original_text : textToTranslate,
      translated_text : translatedText,
      original_language: inputLanguage,
      translated_language: outputLanguage
    }
    try{
        console.log(props.URL+`translations/${props.currentUser._id}/new`);
        const res = await fetch(props.URL+`/translations/${props.currentUser._id}/new`, {
          method: "POST",
          headers: { 
            'Content-Type': "application/json"
          },
          body: JSON.stringify(newTranslation)
        })
        const data = res.json()
        console.log(data)
    }
    catch(error){
      console.log(error)
      setErr(error)
    }
  }
  function translateText(){
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", textToTranslate);
    encodedParams.append("target", outputLanguage);
    encodedParams.append("source", inputLanguage);
    encodedParams.append("format", "text");

    const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    },
    data: encodedParams
  };

    axios.request(options).then(function (response) {
      setTranslatedText(response.data.data.translations[0].translatedText);
    }).catch(function (error) {
      console.error(error);
    });
  }
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
        <button onClick={handleSave}>Save Translation</button>
      </div>
    </div>
  ) 
}
  
  export default Translate;