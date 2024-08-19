import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/features/api';
import bronSlice from './bron.slice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    bron: bronSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
})
