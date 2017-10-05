import React, { Component } from 'react';

import SInput from './styledcomps/SInput';

class TyperArea extends Component {
    constructor(props){
        super(props);

        this.state = {
            word: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }

    handleChange(event){
        let {value} = event.target;

        this.setState( () => ({
            word: value
        }));
    }

    handleEnter(event){
        if(event.key === "Enter"){
            this.props.func(this.state.word);
            
            this.setState( () => ({
                word: ""
            }));

        }
    }

    render(){
        return(
            <SInput type="text" onChange={this.handleChange} onKeyPress={this.handleEnter} value={this.state.word}/>
        );
    }
}

export default TyperArea;