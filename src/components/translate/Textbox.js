
import Select from "./Select"

function Textbox(props){
    return (
        <div>
            <Select selectedLanguage={props.selectedLanguage}/>
            <textarea
                placeholder={props.className === 'input' ? 'Enter Text' : 'Translation'}
                disabled={props.className !== 'input'}
                onChange={(e) => props.setText(e.target.value)}
                value={props.className === 'input' ? props.textToTranslate : props.translatedText}
            />
        </div>
    )
}

export default Textbox