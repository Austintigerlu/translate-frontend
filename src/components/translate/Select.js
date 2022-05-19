import React, { useEffect, useState } from 'react';
import abbreviations from './abbreviations';

// props.setLanguage
function Select(props){
  // const [languageOptions, setLanguageOptions] = useState(null);
  const setLanguage = props.selectedLanguage
  
  const [language, languageOptions] = useState(null)
  
  function handleChange(e){
    setLanguage(e.target.value)
  }


const options = {
  method: 'GET',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
  headers: {
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
  }
};

const getList = async() => {
  fetch(options.url, options)
  .then(response => response.json())
  .then(response => languageOptions(response.data.languages))
  .catch(err => console.error(err));
}
useEffect(()=>{
  getList()
}, [])


const loaded = () => {
  const mapping = language.map((lang, i) => {
    const abbrev = lang.language
    return (
      <>
        <option key={i} value={abbrev}>{abbreviations[abbrev]}</option>
      </>
    )
  })
  return (
    <div className="flex justify-center mb-3">
        <select className="rounded-md w-full" onChange={handleChange}>
          {mapping}
        </select>
      </div>
  )
}
    return language ? loaded() : <h1>Loading...</h1>
  } 
  
export default Select