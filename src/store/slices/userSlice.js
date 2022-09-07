import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: "",
    password: "",
    // "Проверка", вошел пользователь или нет
    isLogged: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn(state, action) {
            state.login = action.payload.login;
            state.password = action.payload.password;
            state.isLogged = action.payload.isLogged;
        },
        logOut(state) {
            state.login = "";
            state.password = "";
            state.isLogged = false;
        },
    },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
