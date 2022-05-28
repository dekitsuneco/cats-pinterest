import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { FLUSH, persistReducer, PURGE, REGISTER } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { PAUSE, PERSIST, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { likedSlice } from './reducers/LikedSlice';

const likedReducer = likedSlice.reducer;

const rootReducer = combineReducers({
  likedReducer,
});

const persistConfig = {
  key: 'likedReducer',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

type RootState = ReturnType<typeof rootReducer>;
type AppStore = typeof store;
type AppDispatch = AppStore['dispatch'];

export type { RootState, AppStore, AppDispatch };
export { store, persistor };
