import React from 'react';

function Keypad (){
    return (
        <div>
            <input onChange ={event=> console.log('Entering password...')}type="password" />
        </div>
    )
}

export default Keypad;