import React from 'react'
import ReactDOM from 'react-dom/client'

import { Global, css } from '@emotion/react';

import Home from './Home';

const globalStyles = css`
    body {
        margin: 0;
        padding: 0;

        height: 100vh;
        width: 100vw;

        background: radial-gradient(circle, royalblue, gray);

        display: flex;
        justify-content: center;
        align-items: center;
    }
`

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Global styles={globalStyles} />
        <Home />
    </React.StrictMode>
);