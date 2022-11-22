import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from "./routes/router";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter>
        <App />
    </AppRouter>
);
