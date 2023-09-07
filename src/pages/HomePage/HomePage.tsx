import React from 'react';
import {useGetAllPokemonsQuery, useGetPokemonByNameQuery} from "../../store/pokemonApi";
import {IAllPokemon} from "../../store/types/IAllPokemon";
const HomePage = () => {
    // const { data : search, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    const { data : pokemons, error, isLoading } = useGetAllPokemonsQuery(50)
    return (
        <main>
            {/*{error ? (*/}
            {/*    <>Oh no, there was an error</>*/}
            {/*) : isLoading ? (*/}
            {/*    <>Loading...</>*/}
            {/*) : data ? (*/}
            {/*    <>*/}
            {/*        <h3>{data.species.name}</h3>*/}
            {/*        <img src={data.sprites.front_shiny} alt={data.species.name} />*/}
            {/*    </>*/}
            {/*) : null}*/}
            {pokemons && pokemons.results.map((el : IAllPokemon, idx : number)=>{
                return <>
                    <h2 key={idx}>{el.name}</h2>
                    <h2 key={idx}>{idx+1}</h2>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`} alt={el.name}/>
                </>
            })}
        </main>
    );
};

export default HomePage;