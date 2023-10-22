import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, userReducer } from "./reducer.js";
import { fetchUser } from "./action.js";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    user: userReducer,
  },
});


// Fetch user data when the store is created
store.dispatch(fetchUser());

export default store;
