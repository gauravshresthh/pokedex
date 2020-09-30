import React from 'react';

const Pokemon = (props) => {
  console.log(props.match.params.pokemonID);
  return (
    <div>
      <h1>Individual Component:</h1>
    </div>
  );
};

export default Pokemon;
