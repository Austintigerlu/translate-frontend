
import Select from "./Select"

function Textbox(props){
    return (
        <div>
            <Select selectedLanguage={props.selectedLanguage}/>
            <textarea
                placeholder={props.className === 'input' ? 'Enter Text' : 'Translation'}
                disabled={props.className !== 'input'}
            />
        </div>
    )
}

export default Textbox