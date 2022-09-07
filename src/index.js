import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/";
import { createGlobalStyle } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

// Глобальные стили
const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Global />
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
