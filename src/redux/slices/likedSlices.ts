import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedCardsState {
    likedCards: string[];
}

const initialState: LikedCardsState = {
    likedCards: [],
};

const likedCardsSlice = createSlice({
    name: 'likedCards',
    initialState,
    reducers: {
        toggleLike(state, action: PayloadAction<string>) {
            const id = action.payload;
            const isLiked = state.likedCards.includes(id);
            state.likedCards = isLiked
                ? state.likedCards.filter(cardId => cardId !== id)
                : [...state.likedCards, id];
        },
    },
});

export const { toggleLike } = likedCardsSlice.actions;
export default likedCardsSlice.reducer;
