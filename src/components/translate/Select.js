import React from 'react';
// props.setLanguage
function Select(props){
  // const [languageOptions, setLanguageOptions] = useState(null);
  const setLanguage = props.selectedLanguage

  function handleChange(e){
    setLanguage(e.target.value)
  }

    return (
      <div className="select">
        <select onChange={handleChange}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="zh-CN">Chinese</option>
          <option value="ja">Japanese</option>
          <option value="ko">Korean</option>
          <option value="sv">Swedish</option>
          <option value="pl">Polish</option>
        </select>
      </div>
    )
  } 
  
  export default Select