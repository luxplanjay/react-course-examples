import React, { Component } from 'react';
import { css } from 'emotion';
import Input from './input';
import Dropdown from './dropdown';
import SearchSelect from './search-select';

const styles = {
  container: css`
    position: relative;
    width: 20rem;
  `
};

export default class Autocomplete extends Component {
  static defaultProps = {
    options: []
  };

  state = {
    dropDownVisible: false
  };

  showDropdown = () => this.setState({ dropDownVisible: true });

  hideDropdown = () => this.setState({ dropDownVisible: false });

  filterMethod = (options, query) =>
    options.filter(option =>
      option.toLowerCase().includes(query.toLowerCase())
    );

  render() {
    const { dropDownVisible } = this.state;

    return (
      <SearchSelect
        options={this.props.options}
        filterMethod={this.filterMethod}
      >
        {({ results, search }) => (
          <div className={styles.container}>
            <Input
              placeholder="Type to search list"
              onChange={search}
              onFocus={this.showDropdown}
              onBlur={this.hideDropdown}
            />
            {dropDownVisible && <Dropdown items={results} />}
          </div>
        )}
      </SearchSelect>
    );
  }
}
