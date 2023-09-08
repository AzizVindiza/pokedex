import './PokemonTypeCard.sass';
import React from "react";
import {Link} from "react-router-dom";
export interface PokemonCardProps {
    el : any;
    idx : number;
}

const PokemonTypeCard = ({el,idx} : PokemonCardProps) => (
    <Link className={"pokemonCard"} to={`/${el.pokemon.name}`}>
        <div className="pokemonCard__container">
            <h2 className={"pokemonCard__name"}>{el.pokemon.name} <span className={"pokemonCard__number"}>#{el.pokemon.url.slice(34,-1)}</span></h2>
            <div className={"pokemonCard__img"}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${el.pokemon.url.slice(34,-1)}.png`} alt={el.name}/>
            </div>
        </div>
    </Link>
);

export default PokemonTypeCard;
