import React, { useState } from 'react';

function C2() {
  const [nom, setNom] = useState('');
  const [txt, setTxt] = useState('');

  function handleClick() {
    setTxt(nom)
  }

  return (
    <div>
      <input type="text" placeholder="tapez votre nom" onChange={e=>setNom(e.target.value)} />
      <button onClick={handleClick}>click</button>
      <p>Bonjour mr. {txt}</p>
    </div>
  );
}

export default C2
