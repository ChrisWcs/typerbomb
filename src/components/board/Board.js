import React from 'react';

const Board = ({arr}) => (
    <ul>
        {arr.map( x => <li>{x.word}</li>)}
    </ul>
);

export default Board;