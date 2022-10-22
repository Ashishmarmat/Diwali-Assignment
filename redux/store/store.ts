import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postAPI } from '../../apiData/postAPI';
import PostData from '../reducer/PostData';

export const store = configureStore({
  reducer: {
    [postAPI.reducerPath]: postAPI.reducer,
    PostData: PostData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPI.middleware),
})

setupListeners(store.dispatch)
export default store;