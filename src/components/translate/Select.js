import axios from 'axios'
import {useState} from 'react';

function Select(props){
  const [languageOptions, setLanguageOptions] = useState(null)

  const options = {
    method: 'GET',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
    headers: {
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
      'X-RapidAPI-Key': '3c5a11d66bmsh65e83ecaec2e36ap1cec7djsn9c8049b07f5c'
    }
  };
  
  axios.request(options)
    .then(function (response) {
    console.log(response.data.data.languages);
  }).catch(function (error) {
    console.error(error);
  });


    return (
      <div className="select">
        <select>

        </select>
      </div>
    )
  } 
  
  export default Select