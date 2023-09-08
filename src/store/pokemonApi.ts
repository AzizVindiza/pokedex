import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import {IAllPokemon} from "./types/IAllPokemon";
// import {Pokemon} from "./IPost";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        getAllPokemons: builder.query<any, number>({
            query: (limit = 50) => ({
                url : "pokemon",
                params : {
                    limit : limit
                }
            }),
        }),
        getPokemonByName: builder.query<any, string>({
            query: (name) => `pokemon${name}`,
        }),
        getPokemonByType: builder.query<any, string>({
            query: (name) => `type/${name}`,
        }),
    }),
})

export const { useGetPokemonByNameQuery,useGetPokemonByTypeQuery,useGetAllPokemonsQuery } = pokemonApi