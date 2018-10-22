import React, { Component } from 'react';
import { css } from 'emotion';
import Autocomplete from './autocomplete';
import TagListSearch from './tag-list-search';

const styles = {
  container: css`
    min-height: 100vh;
    display: flex;
    justify-content: center;
  `,
  section: css`
    padding: 16px;
  `
};

const options = [
  'Inside Out',
  'John Wick',
  'Jurassic World',
  'The Lord of the Rings',
  'Pacific Rim',
  'Pirates of the Caribbean',
  'Planet of the Apes',
  'Saw',
  'Sicario',
  'Zombies'
];

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.section}>
          <h2>Autocomplete</h2>
          <Autocomplete options={options} />
        </div>
        <div className={styles.section}>
          <h2>Tag List Search</h2>
          <TagListSearch options={options} />
        </div>
      </div>
    );
  }
}

export default App;
