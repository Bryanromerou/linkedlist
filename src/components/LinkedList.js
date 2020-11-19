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
            <>
            <div className= "linkedList">
                {this.state.head}
            </div>
            <input 
            onChange={(event) => this.setState({ inputVal: event.target.value })}
            className="form_input" 
            type="text" 
            placeholder="Enter New Input!"
            value={this.state.inputVal}
            />
            </>
        );
    }
}

export default LinkedList;
