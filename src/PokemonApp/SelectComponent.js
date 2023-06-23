import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// import Select from "react-select";

const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const SelectComponent = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");

  useEffect(() => {
    axios.get(URL).then((resp) => {
      setPokemonList(resp.data.results);
    });
  }, []);

  const handleChange = (event) => {
    setSelectedPokemon(event.target.value);
  };
  //   const handleChange = (selectedOption) => {
  //     setSelectedPokemon(selectedOption);
  //   };

  //   const options = pokemonList.map((pokemon) => ({
  //     value: pokemon.name,
  //     label: pokemon.name,
  //   }));

  return (
    <div>
      <div>
        <div>
          SelectComponent:
          <div>
            <select
              id="pokemon"
              value={selectedPokemon}
              onChange={handleChange}
            >
              {pokemonList.map((pokemon) => (
                <option key={pokemon.name} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </select>
            {selectedPokemon && <p>You selected: {selectedPokemon}</p>}

            {/* <Select
              id="pokemon"
              value={selectedPokemon}
              onChange={handleChange}
              options={options}
              placeholder="-- Select --"
            />
            {selectedPokemon && <p>You selected: {selectedPokemon.label}</p>} */}
          </div>
        </div>
        <p></p>
      </div>
    </div>
  );
};

export default SelectComponent;
