import React, { Component } from 'react';

class Timer extends Component {
    state = {
        minutes: this.props.minutes || 0,
        seconds: this.props.seconds || 0
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const {minutes, seconds} = this.state;

            if (seconds > 0) {
                this.setState(({seconds}) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    this.props.time(minutes, seconds);
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({minutes}) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div style={this.props.class}>
                {minutes === 0 && seconds === 0 ?
                <h1>Times Up!</h1> :
                (<p>Timer: {minutes} : {seconds < 10 ? `0${seconds}` : seconds}</p>)}
            </div>
        )
    }
}

export default Timer;