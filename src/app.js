import React, { Component } from 'react';
import Snackbar from './snackbar';
import Button from './button';
import styles from './app.module.css';

export default class App extends Component {
  state = {
    isSnackbarOpen: false
  };

  toggleSnackbar = () => {
    this.setState(state => ({
      isSnackbarOpen: !state.isSnackbarOpen
    }));
  };

  render() {
    const { isSnackbarOpen } = this.state;

    return (
      <div className={styles.container}>
        {isSnackbarOpen && (
          <Snackbar
            message="You have 15 unread messages!"
            onClose={this.toggleSnackbar}
          />
        )}

        <Button label="Toggle Snackbar" onClick={this.toggleSnackbar} />
      </div>
    );
  }
}
