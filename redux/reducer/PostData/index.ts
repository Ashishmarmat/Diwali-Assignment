import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type PostData = {
  favPost: [];
};

const initialState = {
  favPost: [],
} as PostData;

const PostData = createSlice({
  name: 'PostData',
  initialState,
  reducers: {
    setToFav(state, action: PayloadAction<any>) {
      state.favPost = action.payload;
    },
  },
});

export const { setToFav } = PostData.actions;

export default PostData.reducer;
