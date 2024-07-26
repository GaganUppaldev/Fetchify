import React from "react";
import ReactDOM from "react-dom";
import {App,New,PostRequestComponent} from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App></App>
        <New></New>
        <PostRequestComponent></PostRequestComponent>
    </React.StrictMode>
    );
