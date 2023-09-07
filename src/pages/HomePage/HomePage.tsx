import React, {useState} from 'react';
import "./HomePage.sass"
import {useGetAllPokemonsQuery, useGetPokemonByNameQuery} from "../../store/pokemonApi";
import {IAllPokemon} from "../../store/types/IAllPokemon";
import PokemonCardLazy from "../../components/PokemonCard/PokemonCard.lazy";

const HomePage = () => {
    const [limit, setLimit] = useState(20)
    const handleButtonLimit = () => {
        setLimit(prevState => {
            return prevState + 10
        })
    }
    // const { data : search, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    const {data: pokemons, error, isLoading} = useGetAllPokemonsQuery(limit)
    return (
        <main className={"home"}>
            <div className="container home__container">
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : pokemons && pokemons.results.map((el: IAllPokemon, idx: number) => {
                    return <PokemonCardLazy el={el} idx={idx} key={idx}/>
                })}
            </div>
           <div className="container home__container">
               <button onClick={() => handleButtonLimit()} className={"btn-more"}> More ...</button>
           </div>
        </main>
    );
};

export default HomePage;