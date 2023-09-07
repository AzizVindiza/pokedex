import './Header.sass';
import Search from "../../components/Search/Search";
import React from "react";
import {useGetAllPokemonsQuery} from "../../store/pokemonApi";
import {Link} from "react-router-dom";

const Header = () => {
    const {data: pokemons, error, isLoading} = useGetAllPokemonsQuery(1000)
    return (
        <header className={"header"}>
            <div className="container">
                <Link to={""}>HOME</Link>
                {pokemons && <Search array={pokemons.results.map((el: any) => el.name)}/>}
            </div>
        </header>
    )
};

export default Header;
