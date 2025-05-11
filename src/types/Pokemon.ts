import type { PokemonType } from './PokemonType'

export type Pokemon = {
    name: string
    types: PokemonType[]
    position: number
}
