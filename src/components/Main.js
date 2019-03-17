import React, { Component } from 'react';

class  Main extends Component {
    render() { 
        return ( 
            <div className="main">
                <button onClick={()=> this.props.changeName("raj")}>Change Name</button>
            </div>
        );
    }
}

export default  Main;