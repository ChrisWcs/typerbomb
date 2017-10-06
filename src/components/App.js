import React, { Component } from 'react';

import {} from '../utils/bombUtils';

import TyperArea from './typerArea/TyperArea';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            bombs: [],
        }
    }





    render(){
        return (
            <TyperArea func={(word) => {console.log(word)}}/>
        );
    }
}

export default App;