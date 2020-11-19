import React, { Component } from 'react';
import Node from './Node';
class LinkedList extends Component {
    constructor(props){
        super(props)
        this.state= {
            head: <Node data ="Head"/>,
            inputVal: '',
        }
    }
    render() {
        return (
            <div className= "linkedList">
                {this.state.head}
            </div>
        );
    }
}

export default LinkedList;
