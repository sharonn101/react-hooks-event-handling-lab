// Code Keypad Component Here

function Keypad (){
    function handleKeyPress() {
        console.log('Entering password...');
    }
    return (
        <div>
            <input type="password" onChange={handleKeyPress}/>
        </div>
    )
}

export default Keypad;