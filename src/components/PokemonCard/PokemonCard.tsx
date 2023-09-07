import './PokemonCard.sass';
import React from "react";
import {Link} from "react-router-dom";
export interface PokemonCardProps {
    el : any;
    idx : number;
}

const PokemonCard = ({el,idx} : PokemonCardProps) => (
    <Link className={"pokemonCard"} to={`/pokemon/${el.name}`}>
        <div className="pokemonCard__container">
            <h2 className={"pokemonCard__name"}>{el.name} <span className={"pokemonCard__number"}>#{idx+1}</span></h2>
            <div className={"pokemonCard__img"}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${idx+1}.svg`} alt={el.name}/>
            </div>
        </div>
    </Link>
);

export default PokemonCard;
