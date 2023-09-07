import './Search.sass';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
export interface PokemonCardProps {
    array : string[]
}
const Search = ({array} : PokemonCardProps) => {
    const [value, setValue] = useState<string | null>('type name of Pokemon');
    const navigate = useNavigate();
    const handleOnClick = (value: string | null) => value !== null ? navigate(`/${value}`) : "";
    return(
    <div className={"search"}>
        <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
                setValue(newValue);
                handleOnClick(newValue)
            }}

            id="controllable-states-demo"
            options={array}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Search Pokemon" />}
        />
    </div>
)};

export default Search;
