import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CatModel } from '../../models/Cat';

interface LikedState {
  liked: Array<CatModel>;
}

const initialState: LikedState = {
  liked: [],
};

const likedSlice = createSlice({
  name: 'liked',
  initialState,
  reducers: {
    addToLiked(state: LikedState, action: PayloadAction<CatModel>) {
      state.liked = [...state.liked, action.payload];
    },
    removeFromLiked(state: LikedState, action: PayloadAction<CatModel>) {
      const filteredLiked = state.liked.filter(
        (cat) => cat.id !== action.payload.id,
      );

      state.liked = filteredLiked;
    },
  },
});

export { likedSlice };
