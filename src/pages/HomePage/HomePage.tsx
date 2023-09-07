import React, {useState} from 'react';
import "./HomePage.sass"
import {useGetAllPokemonsQuery, useGetPokemonByNameQuery} from "../../store/pokemonApi";
import {IAllPokemon} from "../../store/types/IAllPokemon";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
const HomePage = () => {
    const [limit, setLimit] = useState(40)
    const handleButtonLimit = () =>{
        setLimit(prevState => {
            return prevState + 10
        })
    }
    // const { data : search, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    const { data : pokemons, error, isLoading } = useGetAllPokemonsQuery(limit)
    return (
        <main className={"home"}>
            <div className="container home__container">
                {error ? (
                    <>Oh no, there was an error</>
                ) : isLoading ? (
                    <>Loading...</>
                ) : pokemons && pokemons.results.map((el : IAllPokemon, idx : number)=>{
                    return <PokemonCard el={el} idx={idx} key={idx}/>
                })}
            </div>
            <button onClick={()=> handleButtonLimit()} className={"btn-more"}> More ...</button>
        </main>
    );
};

export default HomePage;