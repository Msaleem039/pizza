import { configureStore } from "@reduxjs/toolkit";

import reducerSlice from "./reducerSlice";

const store = configureStore({
   reducer:{
    cart:reducerSlice,
   }
})
export default store