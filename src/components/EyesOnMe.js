import React from 'react';

function EyesOnMe(){
    function handleB(){
        return console.log('Hey! Eyes on me!')
    }
    function handleF(){
        return console.log('Good!')
    }
    return( 
        <div>
            <button onBlur={handleB} onFocus={handleF}>Eyes on me</button>
        </div>
    );
}

export default EyesOnMe;