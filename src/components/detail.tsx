import type { Pokemon } from '../types/Pokemon'

interface IDetailProps {
    pokemon: Pokemon
    onClose: () => void
}

const Detail = ({ onClose, pokemon }: IDetailProps) => {
    return (
        <div className="lg:w-1/3 lg:relative fixed top-0 left-0 block w-full h-screen bg-amber-500 transition-all">
            <button onClick={onClose}>X</button>
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default Detail
