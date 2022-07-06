import React from 'react';
import './inspector'

import SchemaStateQuestionnaire from './SchemaStateQuestionnaire';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
