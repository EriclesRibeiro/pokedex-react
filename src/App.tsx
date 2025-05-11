import { useState } from 'react'
import usePokemon from './hooks/usePokemon'

const App = () => {
    const [pokemons, setPokemons] = useState(null)
    const fetchPokemons = usePokemon({
        key: 'all-pokemons',
        path: 'pokemon',
        limit: 10,
        offset: 0,
    })
    return (
        <div className="max-w-[900px] mx-auto">
            <h1>Olá, mundo!</h1>
            <button
                className=""
                onClick={() => console.log(fetchPokemons.data)}
            >
                Testar API
            </button>
        </div>
    )
}

export default App
