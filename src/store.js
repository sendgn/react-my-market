import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './reducers/cart-reducer'; 
import favoritesReducer from './reducers/favorites-reducer';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        favorites: favoritesReducer
    },
});
