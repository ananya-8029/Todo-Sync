import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

//TasksSlice
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

export const { addTasks } = taskSlice.actions;
export const selectTasks = (state) => state.tasks;

// User's slice
const userInitialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUser = (state) => state.user.user;

// Export both reducers
export const tasksReducer = taskSlice.reducer;
export const userReducer = userSlice.reducer;
