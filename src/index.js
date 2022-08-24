import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./bootstrap.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);