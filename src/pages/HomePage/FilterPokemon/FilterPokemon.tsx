import './FilterPokemon.sass';
import {useGetPokemonByTypeQuery} from "../../../store/pokemonApi";
const pokemonTypes = ["All", "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"]

// @ts-ignore
const FilterPokemon = ({setType,type}) => {


    return (
        <section className={"filterPokemon"}>
            <div className="container">
                {pokemonTypes.map((el,idx)=>(
                    <button onClick={()=>setType(idx +"")} className={`btn-type ${idx == type ? "btn-type__active": ""}`} key={idx}>{el}</button>
                ))}
            </div>
        </section>
    )
};

export default FilterPokemon;
