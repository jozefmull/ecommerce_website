import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { postsApi } from './services/postsApi';

export const store = configureStore({
  reducer: { 
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, postsApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
