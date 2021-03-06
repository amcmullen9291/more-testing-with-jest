import { useState } from 'react'

function Button() {
    const [ value, setValue ] = useState("Press Here");
    const [ showAnotherButton, setShowAnotherButton ] = useState(false);

 
    const changeButtonText = () => {
        setValue("You Clicked!")
        setShowAnotherButton(true);
    }
    return (
        <>
    <div>
        <button id="button1" data-testid="buttonTest" onClick={changeButtonText}>{value}</button>
    </div>
    {showAnotherButton && (
        <button id="button2" data-testid="buttonTest" title="button2" placeholder="Enter Here">Continue</button>
    )}
    </>
  )
}

export default Button
