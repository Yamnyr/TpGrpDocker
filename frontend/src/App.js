import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageDisplay from './components/Message'; // Importer le composant

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <MessageDisplay />
                <a
                    className="App-link"
                    href="https://github.com/Yamnyr/TpGrpDocker/tree/main"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Quentin - Corentin - Marine
                </a>
            </header>
        </div>
    );
}

export default App;
