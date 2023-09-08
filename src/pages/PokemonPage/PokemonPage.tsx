import './PokemonPage.sass';
import {useGetPokemonByNameQuery} from "../../store/pokemonApi";
import {useLocation} from "react-router-dom";
import React from "react";
import {CircularProgress} from "@mui/material";

const PokemonPage = () => {
    const location = useLocation()
    const {data: pokemon, error, isLoading} = useGetPokemonByNameQuery(location.pathname)
    return (

        <div className={"pokemonPage"}>
            <div className="container pokemonPage__container">
                {
                    error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <div className={'container-h'}>
                            <CircularProgress/>
                        </div>
                    ) : pokemon && <>
                        <h2 className="pokemonPage__h2">{pokemon.name}</h2>

                        <div className={"pokemonPage__info"}>
                            <div className="pokemonPage__img">
                                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name}/>
                            </div>
                            <div className={"pokemonPage__txt"}>
                                <h3 className="pokemonPage__h3">Weight : {pokemon.weight}</h3>
                                <h2 className="pokemonPage__h2">Abilities</h2>
                                {pokemon.abilities.map((el: any, idx: number) => (
                                    <h3 className="pokemonPage__h3">{idx+1} : {el.ability.name}</h3>
                                ))}
                                <h2 className="pokemonPage__h2">Types</h2>
                                {pokemon.types.map((el: any, idx: number) => (
                                    <h3 className="pokemonPage__h3">{idx+1} : {el.type.name}</h3>
                                ))}
                            </div>
                        </div>


                    </>
                }
            </div>
        </div>
    )
};

export default PokemonPage;
