import React from 'react';

const divStyle = {
    border: '1px solid black',
    width: '30%',
    textAlign: 'center',
    padding: '20px',
}

const buttonStyle = {
    padding: '5px',
    margin: '10px',
}

export default class Stopwatch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            runningTime: 0,
        }
    }

    handleClick = () => {
        this.setState(state => {
            if (state.running) {
                clearInterval(this.timer);
            } else {
                const startTime = Date.now() - this.state.runningTime;
                this.timer = setInterval(() => {
                    this.setState({ runningTime: Date.now() - startTime })
                });
            }
            return { running: !state.running };
        });
    };

    handleReset = () => {
        clearInterval(this.timer);
        this.setState({
            running: false,
            runningTime: 0,
        });
    };

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return(
            <div style={divStyle}>
                <h2>Stopwatch</h2>
                <p>{this.state.runningTime}ms</p>
                <button onClick={this.handleClick} style={buttonStyle}>{this.state.running ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset} style={buttonStyle}>Reset</button>
            </div>
        )
    }
}