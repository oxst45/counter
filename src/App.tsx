import React from 'react';

import './App.css';

import CounterPanel from "./components/counterPanel";
import {SettingsPanel} from "./components/settingsPanel";
import {Flex, Spacer} from "@chakra-ui/react";

import style from "./styles/styles.module.css";




function App() {

    return (
        <div className={style.wrapper}>
        <Flex justifyContent="center" alignItems="center" margin="0 auto">
            <Spacer />
            <div>
                <SettingsPanel/>
            </div>

            <div>
                <CounterPanel/>
            </div>
            <Spacer />
        </Flex>
        </div>
    );
}

export default App;
