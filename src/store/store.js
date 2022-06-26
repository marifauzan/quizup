import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userSlice from "../slice/user-slice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice)
let stores = createStore(persistedReducer)
let persistors = persistStore(stores)

export function store() {
 
  return stores;
}

export function persistor() {
  
  return persistors;
}

