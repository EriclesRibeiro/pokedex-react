import { useState } from 'react'
import Panel from './components/panel'

const App = () => {
    const [offset, setOffset] = useState<number>(0)
    return (
        <Panel limit={50} offset={offset} />
        // Carregar mais será implementado futuramente
    )
}

export default App
