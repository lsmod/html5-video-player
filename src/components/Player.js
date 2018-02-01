import React, { Component } from "react";

class Player extends Component {
  constructor() {
    super();
    this.state = {
      paused: true,
      ended: false,
      duration: 0,
      currentTime: 0,
      percentage: 0
    };
  }

  pauseToggle() {
    if (this.state.paused) {
      this.refs.playerRef.play();
    } else {
      this.refs.playerRef.pause();
    }
    this.setState({
      paused: !this.state.paused,
      ended: false
    });
  }

  onEnded() {
    this.setState({
      ended: true,
      paused: true
    });
  }

  onTimeUpdate() {
    let duration = this.refs.playerRef.duration;
    let currentTime = this.refs.playerRef.currentTime;
    let percentage = Math.round(currentTime / (duration / 100));
    this.setState({
      duration: Math.round(duration),
      currentTime: Math.round(currentTime),
      percentage
    });
  }

  render() {
    let pauseBtnText = this.state.paused ? "play" : "pause";
    if (this.state.ended) pauseBtnText = "replay";
    let progressBarWidth = this.props.width / 100 * this.state.percentage;
    let wrapperStyle = {
      width: this.props.width + "px"
    };
    let progressBarStyle = {
      width: progressBarWidth + "px"
    };

    return (
      <div className="simple_video_player" style={wrapperStyle}>
        <video
          ref="playerRef"
          width={this.props.width}
          height={this.props.height}
          onClick={this.pauseToggle.bind(this)}
          onEnded={this.onEnded.bind(this)}
          onTimeUpdate={this.onTimeUpdate.bind(this)}
        >
          <source src={this.props.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <br />
        <div className="simple_video_player-progressbar_wrapper">
          <div
            className="simple_video_player-progressbar"
            style={progressBarStyle}
          >
          </div>
          {this.state.percentage} % <br /> {this.state.currentTime}
          / {this.state.duration} sec(s)<br />
        </div>
        <button
          className="simple_video_player-button"
          type="button"
          onClick={this.pauseToggle.bind(this)}
        >
          {pauseBtnText}
        </button>
      </div>
    );
  }
}

export default Player;
