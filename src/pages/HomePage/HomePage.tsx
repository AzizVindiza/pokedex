import React, {useState} from 'react';
import "./HomePage.sass"
import {useGetAllPokemonsQuery, useGetPokemonByTypeQuery} from "../../store/pokemonApi";
import {IAllPokemon} from "../../store/types/IAllPokemon";
import PokemonCardLazy from "../../components/PokemonCard/PokemonCard.lazy";
import {CircularProgress} from "@mui/material";
import FilterPokemon from "./FilterPokemon/FilterPokemon";
import PokemonTypeCardLazy from "../../components/PokemonTypeCard/PokemonTypeCard.lazy";



const HomePage = () => {
    const [limit, setLimit] = useState(20)
    const [type, setType] = useState("0")
    const handleButtonLimit = () => {
        setLimit(prevState => {
            return prevState + 10
        })
    }
    const {data: pokemons, error, isLoading} = useGetAllPokemonsQuery(limit)
    const {data: pokemonsByType, error : error2, isLoading : isLoading2} = useGetPokemonByTypeQuery(type)

    return (
        <main className={"home"}>
            <FilterPokemon setType={setType} type={type}/>

            <div className="container home__container">
                {
                    type === "0" ? <>
                        {error ? (
                            <>Oh no, there was an error</>
                        ) : isLoading ? (
                            <div className={'container-h'}>
                                <CircularProgress/>
                            </div>

                        ) : pokemons && pokemons.results.map((el: IAllPokemon, idx: number) => {
                            return <PokemonCardLazy el={el} idx={idx} key={idx}/>
                        })}
                </>: <>
                        {error2 ? (
                            <>Oh no, there was an error</>
                        ) : isLoading2 ? (
                            <div className={'container-h'}>
                                <CircularProgress/>
                            </div>

                        ) : pokemonsByType && pokemonsByType.pokemon.map((el: IAllPokemon, idx: number) => {
                            return <PokemonTypeCardLazy el={el} idx={idx} key={idx}/>
                        })}
                    </>
                }
            </div>

            <div className="container home__container">
                <button onClick={() => handleButtonLimit()} className={"btn-more"}> More ...</button>
            </div>
        </main>
    );
};

export default HomePage;