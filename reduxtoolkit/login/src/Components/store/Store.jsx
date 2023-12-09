import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";
import Searchslice from "./Searchslice";
const Store=configureStore({
reducer:{
    cart:Cartslice,
    searchQuery:Searchslice,
    
}
});
export default Store;

