import React from 'react';

import './App.css';

import {Output} from "./components/output";
import CounterPanel from "./components/counterPanel";
import {SettingsPanel} from "./components/settingsPanel";


function App() {

    return (
        <div>
            <div className="settings">
                <SettingsPanel/>
            </div>
            <div className="inc">

                <Output/>

                <CounterPanel/>
            </div>
        </div>
    );
}

export default App;
