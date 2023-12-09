import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const Cartslice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
        shoesStore(state, action) {
            state.push(action.payload)
        },
        dashStore(state, action) {
            state.push(action.payload)
        },
        

    }
});
export const { add, remove,shoesStore,dashStore,input } = Cartslice.actions;
export default Cartslice.reducer;