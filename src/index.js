import React from "react";
import ReactDOM from "react-dom";
import "react-router-dom";
import RouterComponent from "./app/routes";
import "./styles/style.scss";
import "./styles/vendor/normalize.css";

ReactDOM.render(
    <RouterComponent />,
    document.getElementById('root')
);
