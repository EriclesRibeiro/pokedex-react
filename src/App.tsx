import { useState } from 'react'
import Panel from './components/panel'

const App = () => {
    let offset = 0
    let limitParam = 50

    const [limit, setLimit] = useState<number>(limitParam)

    const loadMore = () => {
        setLimit((prev) => (prev += limitParam))
    }

    return (
        <section className="grid w-full p-2">
            <Panel limit={limit} offset={offset} />
            <button
                onClick={loadMore}
                className="p-2 w-60 mt-4 mx-auto bg-gray-900 text-gray-50 rounded-lg cursor-pointer"
            >
                carregar mais
            </button>
        </section>
    )
}

export default App
