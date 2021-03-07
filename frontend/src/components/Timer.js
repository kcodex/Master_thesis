import React, { Component } from 'react';
export default class Timer extends Component {
    state = {
        minutes: 1,
        seconds: 15,
    };

    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state;

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1,
                }));
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval);
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59,
                    }));
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
            <div className="timer">
                {minutes === 0 && seconds === 0 ? (
                    <h1>Koniec czasu</h1>
                ) : (
                    <h1>
                        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </h1>
                )}
            </div>
        );
    }
}
