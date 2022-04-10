import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const [text, setText] = useState('')

    const handleOnUpClick = () => {
        console.log('Hello Upper Case here')
        let upperCase = text.toUpperCase()
        setText(upperCase)
    }

    const handleOnlowerClick = () => {
        let lowerCase = text.toLowerCase()
        setText(lowerCase)
    }

    const handleOnCHange = (event) => {
        console.log('On change')
        setText(event.target.value)
    }

    let word_count;
    if (text == ' ') {
        word_count = 0
        console.log(word_count)
    } else 
    {
        word_count = text.split(' ').length
        console.log(word_count)
    }

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className='form-control' id="myText" value={text} onChange={handleOnCHange} rows="10"></textarea>
            </div>
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <button className="btn btn-outline-secondary" onClick={handleOnUpClick}>Upper Case</button>
                <button className="btn btn-outline-secondary" onClick={handleOnlowerClick}>Lower Case</button>            </div>
        </div>
        <div className="container my-3">
            <h2>Counter</h2>
            <p>{word_count} words, {text.length} characters</p>
            <p>{0.008*word_count} minutes read</p>
            <h5>Text Preview</h5>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    'heading': PropTypes.string,
}

TextForm.defaultProps = {
    'heading': 'Enter txt of your choice'
}