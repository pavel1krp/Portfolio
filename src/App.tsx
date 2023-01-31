import React from 'react';
import './App.scss';
import {Header} from "./components/header/Header";
import {Main} from "./components/main/Main";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <div className={'Wrapper'}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
