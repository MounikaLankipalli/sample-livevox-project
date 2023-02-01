import { createStore } from 'redux';
import {  persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to local storage


const initialState = {
  usersList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        usersList: [...state.usersList, action.data],
      };
    default:
      return state;
  }
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);

export default store;
