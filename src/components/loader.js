import React, { Component } from 'react';
class Loader extends Component {
  constructor(props) {
      super(props);
      this.state={}
  }
  render() {
      return (
          <span className="loader">
              <img id="loading-gif" width="14" height="14" className={this.props.coin.loading ? "show" : "hide"} alt="loading" src="loading.gif" />
          </span>
      );
  }
}
export default Loader;
