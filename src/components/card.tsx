import { POKEMON_TYPES } from '../constants'
import type { Pokemon } from '../types/Pokemon'
import Image from './image'

interface ICardProps {
    pokemon: Pokemon
    onClick: (data: Pokemon) => void
}

const Card = ({ pokemon, onClick }: ICardProps) => {
    const handleClick = () => onClick(pokemon)
    return (
        <div
            onClick={handleClick}
            className="grid w-40 h-48 gap-2 place-items-center"
        >
            <Image
                src={pokemon.image}
                alt={`Imagem de ${pokemon.name}`}
                className="h-20 w-20 object-contain"
            />
            <div className="flex flex-col text-center">
                <h3 className="font-bold text-lg text-gray-400 leading-3">
                    N° {pokemon.position}
                </h3>
                <h2 className="capitalize font-bold text-2xl text-gray-900">
                    {pokemon.name}
                </h2>
                <div className="flex flex-row flex-wrap justify-center gap-2 mt-2">
                    {pokemon.types.map((type) => (
                        <div
                            key={type.type.name}
                            className={`${POKEMON_TYPES.find((pt) => pt.name.toLowerCase() === type.type.name)?.color} max-w-20 grow rounded-lg text-center text-sm font-bold text-white p-2 uppercase`}
                        >
                            {type.type.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card
