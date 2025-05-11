import { useEffect, useState } from 'react'
import fetchPokemon from '../hooks/useFetch'
import usePokemon from '../hooks/usePokemon'
import type { Pokemon } from '../types/Pokemon'
import Card from './card'

interface IPanelProps {
    limit?: number
    offset?: number
}

const Panel = ({ limit = 10, offset = 0 }: IPanelProps) => {
    const [listPokemons, setListPokemons] = useState<Pokemon[]>([])

    const { data, isLoading, error } = usePokemon({
        key: 'all-pokemons',
        path: 'pokemon',
        limit: limit,
        offset: offset,
    })

    useEffect(() => {
        if (!data?.results) return

        Promise.all(
            data.results.map(async (pokemon: any) => {
                const detail = await fetchPokemon({
                    path: 'pokemon',
                    param: pokemon.name,
                })
                return {
                    name: detail.name,
                    position: detail.id,
                    types: detail.types,
                }
            }),
        ).then((results) => {
            setListPokemons(results)
        })
    }, [data])

    if (isLoading) return <p>Carregando pokémons...</p>
    if (error) return <p>Erro ao carregar pokémons.</p>

    return listPokemons.map((pokemon) => (
        <Card
            name={pokemon.name}
            position={pokemon.position}
            types={pokemon.types}
            key={pokemon.position}
        />
    ))
}

export default Panel
