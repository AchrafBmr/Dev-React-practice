import React, { useState } from 'react';

function C2() {
  const [nom, setNom] = useState('');
  const [txt, setTxt] = useState('');

  function handleChange(e) {
    setNom(e.target.value);
  }

  function handleClick() {
    setTxt(nom)
  }

  return (
    <div>
      <input type="text" placeholder="taperz votre nom" onChange={handleChange} />
      <button onClick={handleClick}>click</button>
      <p>Bonjour {txt}</p>
    </div>
  );
}

export default C2
