import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {appStore} from "./store/store";
import {ChakraProvider, theme} from '@chakra-ui/react';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ChakraProvider theme={theme}>
        <Provider store={appStore}>
            <App/>
        </Provider>
    </ChakraProvider>
);

