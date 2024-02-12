import React from 'react'
import { useState } from 'react';

function C1() {
    const [text, setText] = useState('Bonjour');
    const [cpt, setCpt] = useState(0);

    const handleClick = () => {
        setCpt(cpt + 1)
        if(cpt%2 !== 0){
            setText('Bonjour');
        }else{
            setText('Hello');
        }
    };
  
    return (
      <div>
        <div>{text}</div>
        <button onClick={handleClick}>Change</button>
      </div>
    );
};
export default C1
