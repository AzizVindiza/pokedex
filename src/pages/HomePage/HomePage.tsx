import React from 'react';
import {useGetPokemonByNameQuery} from "../../store/pokemonApi";
const HomePage = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    return (
        <main>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{data.species.name}</h3>
                    <img src={data.sprites.front_shiny} alt={data.species.name} />
                </>
            ) : null}
        </main>
    );
};

export default HomePage;