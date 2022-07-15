import axios from 'axios';
import { IGetDeckResponse, IGetCardResponse } from '../types/app.types'

axios.defaults.baseURL = 'https://deckofcardsapi.com/api/deck'

const getDeck = async (): Promise<IGetDeckResponse> => {
    const response = await axios.get('/new/shuffle/?deck_count=1')
    return response.data
}

const getCard = async (deckId: string, count: number): Promise<IGetCardResponse> => {
    const response = await axios.get(`/${deckId}/draw/?count=${count}`)
    return response.data
}

export {
    getDeck,
    getCard
} 