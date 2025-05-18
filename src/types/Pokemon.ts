import type { AbilityType } from './PokemonAbility'
import type { MoveType } from './PokemonMove'
import type { SpriteType } from './PokemonSprite'
import type { PokemonType } from './PokemonType'

export type Pokemon = {
    name: string
    types: PokemonType[]
    position: number
    image: string
    abilities: AbilityType[]
    moves: MoveType[]
    sprites: SpriteType
}
