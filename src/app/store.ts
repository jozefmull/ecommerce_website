import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { productsApi } from './services/productsApi';
import { postsApi } from './services/postsApi';
import { userApi } from './services/userApi';

export const store = configureStore({
  reducer: { 
    [productsApi.reducerPath]: productsApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    [userApi.reducerPath]: userApi.reducer
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware, postsApi.middleware, userApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
