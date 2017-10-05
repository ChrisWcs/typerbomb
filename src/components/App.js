import React, { Component } from 'react';

import TyperArea from './typerArea/TyperArea';

class App extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <TyperArea func={(word) => {console.log(word)}}/>
        );
    }
}

export default App;