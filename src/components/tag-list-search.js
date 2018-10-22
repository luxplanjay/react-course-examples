import React, { Component } from 'react';
import { css } from 'emotion';
import Input from './input';
import TagList from './tag-list';
import SearchSelect from './search-select';

const styles = {
  container: css`
    width: 20rem;
  `
};

export default class TagListSearch extends Component {
  static defaultProps = {
    options: []
  };

  filterMethod = (options, query) =>
    options.filter(option =>
      option.toLowerCase().includes(query.toLowerCase())
    );

  render() {
    return (
      <SearchSelect
        options={this.props.options}
        filterMethod={this.filterMethod}
      >
        {({ results, search }) => (
          <div className={styles.container}>
            <Input placeholder="Type to search list" onChange={search} />
            <TagList items={results} />
          </div>
        )}
      </SearchSelect>
    );
  }
}
