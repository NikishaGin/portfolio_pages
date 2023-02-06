import React from 'react';
import './App.css';
import {LeftContent} from "./content/LeftContent/LeftContent";
import {RightContent} from "./content/RightContent/RightContent";




function App() {
    return (
        <div className={"main"} style={{opacity: 1}}>
            <LeftContent/>
            <RightContent/>
        </div>


    );
}

export default App;
