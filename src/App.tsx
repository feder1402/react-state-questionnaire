import React from 'react';
import {inspect} from "@xstate/inspect";

import SchemaStateQuestionnaire from './SchemaStateQuestionnaire';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// inspect({iframe: false});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                Schema State Questionnaire
            </header>
            <SchemaStateQuestionnaire/>
        </div>
    );
}

export default App;
