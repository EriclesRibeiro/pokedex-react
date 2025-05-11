import type { Pokemon } from '../types/Pokemon'

const Card = ({ name, position, types }: Pokemon) => {
    console.log(name)
    return <div className="font-bold mx-1">{name}</div>
}

export default Card
