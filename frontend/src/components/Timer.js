import React, { Component } from 'react';
// let color = 'red';
export default class Timer extends Component {
    state = {
        minutes: 0,
        seconds: 45,
        color: 'green',
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
            if (seconds <= 31 && minutes === 0) {
                this.setState({ color: 'orange' });
            }
            if (seconds <= 11 && minutes === 0) {
                this.setState({ color: 'red' });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        const { minutes, seconds } = this.state;
        return (
            <div className="timerContainer">
                <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <g className="timerCircle">
                        <circle className="timerPath" cx="50" cy="50" r="45"></circle>
                        <path
                            id="timerPathRemaining"
                            stroke-dasharray="283"
                            className={`timerPathRemaining ${this.state.color}`}
                            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
                        ></path>
                    </g>
                </svg>
                <span id="timerLabel" className="timerLabel">
                    <div className="timer">
                        {minutes === 0 && seconds === 0 ? (
                            <h1>Koniec!</h1>
                        ) : (
                            <h1>
                                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                            </h1>
                        )}
                    </div>
                </span>
            </div>
        );
    }
}
