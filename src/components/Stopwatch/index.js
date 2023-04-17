// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  renderTimeInMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderTimeInSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  geUpdateTime = () => {
    this.setState(pervState => ({timeInSeconds: pervState.timeInSeconds + 1}))
  }

  startButton = () => {
    this.timeInterval = setInterval(this.geUpdateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  stopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  resetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeInSeconds: 0})
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderTimeInMinutes()}:${this.renderTimeInSeconds()}`
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="stopwatch-heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="image"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="time">{time}</h1>
            <div className="button-container">
              <button
                type="button"
                className="button start-button"
                disabled={isTimerRunning}
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.resetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
