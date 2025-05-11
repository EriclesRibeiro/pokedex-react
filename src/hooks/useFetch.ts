import { API_BASE } from '../constants'

export interface IFetchPokemon {
    limit?: number
    offset?: number
    path: string
    param?: string
}

const fetchPokemon = async ({ limit, offset, path, param }: IFetchPokemon) => {
    let url = `${API_BASE}/${path}`
    if (param) url += `/${param}`

    // Construindo a query string
    const queryParams = new URLSearchParams()

    if (offset !== undefined) queryParams.append('offset', offset.toString())
    if (limit !== undefined) queryParams.append('limit', limit.toString())

    const fullUrl = queryParams.toString() ? `${url}?${queryParams}` : url

    const res = await fetch(fullUrl, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
    })
    if (!res.ok) throw new Error('Ocorreu um erro durante a consulta')
    return res.json()
}

export default fetchPokemon
