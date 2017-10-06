import React, { Component } from 'react';

import { createBomb, reduceBombs } from '../utils/bombUtils';

import words from 'word-list-json';

import TyperArea from './typerArea/TyperArea';
import Board from './board/Board';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            bombs: [createBomb("start")],
            count: 0,
        }

        this.bombTest = this.bombTest.bind(this);
        this.start = this.start.bind(this);
    }

    bombTest(word){

        let temp = reduceBombs(this.state.bombs, word);

        this.setState( () => ({
            bombs: temp
        }));
    }

    start() {
        setInterval( () => {
            this.setState( (prevState) => ({
                bombs: [ ...prevState.bombs, createBomb(words[prevState.count]) ],
                count: prevState.count + 1
            }));

        }, 1000)
    }

    render(){
        return (
            <div>
                <TyperArea func={this.bombTest}/>
                <button onClick={this.start}>Start</button>
                <Board arr={this.state.bombs}/>
            </div>
        );
    }
}

export default App;