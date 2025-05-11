import { useQueries } from '@tanstack/react-query'
import { useEffect } from 'react'
import fetchPokemon from '../hooks/useFetch'
import usePokemon from '../hooks/usePokemon'
import type { Pokemon } from '../types/Pokemon'

interface IPanelProps {
    limit?: number
    offset?: number
}

const Panel = ({ limit = 10, offset = 0 }: IPanelProps) => {
    const { data, isLoading, error } = usePokemon({
        key: 'all-pokemons',
        path: 'pokemon',
        limit: limit,
        offset: offset,
    })

    const pokemonQueries = useQueries({
        queries:
            data?.results.map((pokemon: any) => ({
                queryKey: ['pokemon', pokemon.name],
                queryFn: () =>
                    fetchPokemon({
                        path: 'pokemon',
                        param: pokemon.name,
                    }),
                enabled: !!data,
            })) || [],
    })

    useEffect(() => {
        if (pokemonQueries.every((q) => q.isSuccess)) {
            const formatted = pokemonQueries.map((pokemon: any): Pokemon => {
                const detail = pokemon.data
                return {
                    name: detail.name,
                    position: detail.id,
                    types: [...detail.types],
                }
            })
            console.log(formatted)
        }
    }, [pokemonQueries])

    return <div>Panel</div>
}

export default Panel
