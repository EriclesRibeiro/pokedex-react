import { useEffect, useState } from 'react'
import fetchPokemon from '../hooks/useFetch'
import usePokemon from '../hooks/usePokemon'
import type { Pokemon } from '../types/Pokemon'
import Card from './card'
import Detail from './detail'

interface IPanelProps {
    limit?: number
    offset?: number
}

const Panel = ({ limit = 50, offset = 0 }: IPanelProps) => {
    const [listPokemons, setListPokemons] = useState<Pokemon[]>([])
    const [pokemonSelected, setPokemonSelected] = useState<Pokemon | null>(null)
    // const [detailsOpenned, setDetailsOpenned] = useState<boolean>(true)

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
                    image: detail.sprites.front_default,
                    abilities: detail.abilities,
                    moves: detail.moves,
                    sprites: detail.sprites,
                }
            }),
        ).then((results) => {
            setListPokemons(results)
        })
    }, [data])

    const handleSelectPokemon = (pokemon: Pokemon) => {
        setPokemonSelected(pokemon)
    }

    const handleCloseDetails = () => {
        setPokemonSelected(null)
    }

    if (isLoading) return <p>Carregando pokémons...</p>
    if (error) return <p>Erro ao carregar pokémons.</p>

    return (
        <div className="max-w-[1600px] mx-auto p-2 relative flex flex-row">
            <div className="flex flex-wrap justify-center gap-4 w-full">
                {listPokemons.map((pokemon) => (
                    <Card
                        pokemon={pokemon}
                        onClick={handleSelectPokemon}
                        key={pokemon.name}
                    />
                ))}
            </div>
            {pokemonSelected && (
                <Detail
                    pokemon={pokemonSelected}
                    onClose={handleCloseDetails}
                />
            )}
        </div>
    )
}

export default Panel
