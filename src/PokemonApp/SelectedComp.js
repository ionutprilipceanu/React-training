import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Select from "react-select";
const URL = "https://pokeapi.co/api/v2/pokemon?limit=10";

const SelectedComp = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonSelected, setPokemonSelected] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setPokemonList(response.data.results);
    });
  }, []);

  const handlePokemon = (event) => {
    setPokemonSelected(event.value);
  };

  const pokemonItem = pokemonList.map((pokemon) => ({
    value: pokemon.name,
    label: pokemon.name,
  }));

  return (
    <>
      <div>
        <Select options={pokemonItem} onChange={handlePokemon} />
      </div>
      <div>You have selected: {pokemonSelected}</div>
    </>
  );
};

export default SelectedComp;
