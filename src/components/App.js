import React, { Component } from 'react';

import { createBomb, reduceBombs } from '../utils/bombUtils';

import TyperArea from './typerArea/TyperArea';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            bombs: [createBomb("hello"), createBomb("work")],
        }
        console.log(this.state.bombs);

        this.bombTest = this.bombTest.bind(this);
    }

    bombTest(word){

        let temp = reduceBombs(this.state.bombs, word);

        this.setState( () => ({
            bombs: temp
        }));
        setTimeout(() => {console.log(this.state.bombs)}, .500);
        
    }

    render(){
        return (
            <TyperArea func={this.bombTest}/>
        );
    }
}

export default App;