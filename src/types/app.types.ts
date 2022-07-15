export interface ICard {
    image: string;
    value: string;
    suit: string;
    code: string;
}
export interface IGame {
    cards: ICard[];
    deck: ICard[];
    discard: ICard[];
    hand: ICard[];
    score: number;
    turn: number;
    winner: number;
    gameOver: boolean;
}
export interface IAppState {
    game: IGame;
}

export interface IGetDeck {
    deck_id: string;
}

export interface IGetDeckResponse {
    remaining: number;
    success: boolean;
    shuffled: boolean;
    deck_id: string;
}

export interface IGetCard {
    deck_id: string;
    count: number;
}

export interface IGetCardResponse {
    remaining: number;
    success: boolean;
    cards: ICard[];
    deck_id: string;
}

export interface IAddToPile {
    deck_id: string;
    cards: string;
    pile_name: string;
}

export interface IAddToPileResponse {
    success: boolean;
    deck_id: string;
    pile_name: string;
    pile: object;
}

export interface IGetPile {
    deck_id: string;
    pile_name: string;
}

export interface IGetPileResponse {
    success: boolean;
    deck_id: string;
    pile_name: string;
    pile: object;
}

export interface IShuffleCards {
    deck_id: string;
    remaining? : boolean;
}

export interface IShuffleCardsResponse {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export interface IResetDeck {
    deck_id: string;
}

export interface IResetDeckResponse {
    success: boolean;
    deck_id: string;
    remaining: number;
}

export interface IDrawFromPile {
    deck_id: string;
    pile_name: string;
    count?: number;
    cards? : string;
}

export interface IDrawFromPileResponse {
    success: boolean;
    deck_id: string;
    piles: object;
    cards: ICard[];
    remaining: number;
}

//# sourceMappingURL=app.types.js.map
