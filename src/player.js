import React, { Component, createRef } from 'react';
import Button from './button';
import styles from './player.module.css';

export default class Player extends Component {
  playerRef = createRef();

  play = () => this.playerRef.current.play();

  pause = () => this.playerRef.current.pause();

  render() {
    return (
      <div className={styles.container}>
        <video
          className={styles.player}
          src="http://techslides.com/demos/sample-videos/small.mp4"
          ref={this.playerRef}
        />

        <div className={styles.controls}>
          <Button label="Play" onClick={this.play} />
          <Button label="Pause" onClick={this.pause} />
        </div>
      </div>
    );
  }
}
