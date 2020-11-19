import React, { Component } from 'react';

class Node extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:null,
            nextNode: "null",
        }
    }
    componentDidMount() {
        this.setState({data:this.props.data})
    }
    
    render() {
        return (
            <div className= "node">
                <p>{this.state.data}</p>
            </div>
        );
    }
}

export default Node;
