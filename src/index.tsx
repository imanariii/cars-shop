import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import { Provider } from 'react-redux';
import {store} from "./store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const colors = {
    global: {
        'grey': '#343434',
        'lightgrey': '#545454',
        'orange': '#eb8836',
        'red': '#c12f49'
    }
}

const theme = extendTheme({ colors })

root.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>
);