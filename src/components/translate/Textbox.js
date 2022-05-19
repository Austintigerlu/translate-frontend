
import Select from "./Select"

function Textbox(props){
    return (
        <div className="w-full p-10">
            <Select selectedLanguage={props.selectedLanguage}/>
            <textarea
                className="w-full h-60 p-1"
                placeholder={props.className === 'input' ? 'Enter Text' : 'Translation'}
                disabled={props.className !== 'input'}
                onChange={(e) => props.setText(e.target.value)}
                value={props.className === 'input' ? props.textToTranslate : props.translatedText}
            />
        </div>
    )
}

export default Textbox