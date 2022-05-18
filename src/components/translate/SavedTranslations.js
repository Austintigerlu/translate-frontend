import React, { useEffect, useState } from 'react'

function SavedTranslations(props){
    console.log(props)
    const [pastTranslations, setPastTranslations] = useState('');
    useEffect(() =>{
        console.log(props.translations)
        setPastTranslations(props.translations.map((translation, idx) => {
            return (
              <div key={translation._id}>
                <h1>{translation.original_text + '=>' + translation.translated_text}</h1>
                <button type="button" onClick={() => props.handleDelete(props.currentUser._id, idx)}>X</button>
              </div>
            )
        })
        )
    }, [props])
    return (
        <div className='SavedTranslations'>
            {pastTranslations}
        </div>
    )
}

export default SavedTranslations