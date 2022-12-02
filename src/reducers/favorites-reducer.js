import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        products: JSON.parse(localStorage.getItem('favorites-products')) || [],
    },
    reducers: {
        addToFavorites: (prevState, action) => {
            const product = action.payload;
            const hasInFavorites = prevState.products.some(
                prevProducts => prevProducts.id === product.id
            );

            if (hasInFavorites) return prevState;
            
            const newState = {
                ...prevState,
                products: [
                    ...prevState.products,
                    action.payload,
                ],
            };

            const data = JSON.stringify(newState.products);
            localStorage.setItem('favorites-products', data);

            return newState;
        },
        removeFromFavorites: (prevState, action) => {
            const product = action.payload;

            localStorage.removeItem('favorites-products');

            return {
                products: prevState.products.filter(
                    prevProduct => prevProduct.id !== product.id
                )
            }
        }
    },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
