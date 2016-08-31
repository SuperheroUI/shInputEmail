import React from 'react'
import ReactDOM from 'react-dom';

import ShInputEmail from '../bin/sh-input-email';

require('./app.scss');

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            value1: 'Here is default',
            value2: '',
        };

        this.action = this.action.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }

    handleChange1(event) {
        this.setState({
            value1: event.target.value
        });
    }

    handleChange2(event) {
        this.setState({
            value2: event.target.value
        });
    }

    action() {
        this.setState({
            value1: 'tuna'
        })
    }

    render() {
        return (
            <div>
                <div>State: {JSON.stringify(this.state)}</div>
                <button onClick={this.action}>this.click</button>
                <div style={{width: '300px'}}>
                    <ShInputEmail label="Input 1" value={this.state.value1} onChange={this.handleChange1} />
                </div>
                <div style={{width: '300px'}}>
                    <ShInputEmail label="Input 2" value={this.state.value2} onChange={this.handleChange2} required />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));