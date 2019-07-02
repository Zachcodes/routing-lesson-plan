import React from 'react';
import pets from '../pets';

export default function Pet(props) {
  let selectedPet = pets.find(p => p.id === +props.match.params.id);
  return (
    <div>
      <h1>{selectedPet.name}</h1>
      <p>{selectedPet.type}</p>
    </div>
  );
}
