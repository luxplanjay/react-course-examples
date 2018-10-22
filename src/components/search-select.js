import { Component } from 'react';

export default class SearchSelect extends Component {
  static defaultProps = {
    options: []
  };

  state = { results: this.props.options };

  search = evt => {
    this.setState({
      results: this.props.filterMethod(this.props.options, evt.target.value)
    });
  };

  render() {
    return this.props.children({
      results: this.state.results,
      search: this.search
    });
  }
}
