/**
 * Matrix Telematics CRM React
 =========================================================
 */

import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "App";
import {Provider} from "react-redux";

// Material Dashboard 2 React Context Provider
import {MaterialUIControllerProvider} from "context";
import store from "./app/store";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <MaterialUIControllerProvider>
                <App/>
            </MaterialUIControllerProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
