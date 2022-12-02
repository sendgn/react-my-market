import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    // Начальное состояние хранилища, товаров нет
    initialState: {
        products: [],
    },
    // Все доступные методы
    reducers: {
        // Добавить товар, первый параметр это текущее состояние
        // А второй параметр имеет данные для действия
        addProduct: (prevState, action) => {
            const product = action.payload;
            const hasInCart = prevState.products.some(
                prevProduct => prevProduct.id === product.id
            );

            if (hasInCart) return prevState;

            return {
                ...prevState,
                // Внутри action.payload информация о добавленном товаре
                // Возвращаем новый массив товаров вместе с добавленным
                products: [
                    ...prevState.products,
                    action.payload,
                ],
            };
        },
        removeProduct: (prevState, action) => {
            const product = action.payload;

            return {
                products: prevState.products.filter(
                    prevProduct => prevProduct.id !== product.id
                )
            }
        }
    },
});

// Экспортируем наружу все действия
export const { addProduct, removeProduct } = cartSlice.actions;
// И сам редуктор тоже
export default cartSlice.reducer;
