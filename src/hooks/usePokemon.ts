import { useQuery } from '@tanstack/react-query'
import type { IFetchPokemon } from './useFetch'
import fetchPokemon from './useFetch'

interface IUsePokemon extends IFetchPokemon {
    key: string
}

const usePokemon = ({ path, limit, offset, param, key }: IUsePokemon) => {
    return useQuery({
        queryKey: [key, path, limit, offset, param],
        queryFn: () => fetchPokemon({ path, limit, offset, param }),
    })
}

export default usePokemon
