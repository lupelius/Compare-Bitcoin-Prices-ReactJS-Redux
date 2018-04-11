import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CoindeskActions from '../actions/coindesk';
import * as MapActions from '../actions/map';
import Loader from './loader';

class Coindesk extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.decideCurrency = this.decideCurrency.bind(this);
    }
    componentWillMount() {
        this.props.actions.coindesk.startLoadingBTCCoindesk();
        this.props.actions.coindesk.getBTCCoindesk();
    }
    decideCurrency(cur) {
      switch(cur) {
          case "EUR":
            return this.props.coindesk.bpi.EUR.rate_float;
          case "GBP":
            return this.props.coindesk.bpi.GBP.rate_float;
          default:
            return this.props.coindesk.bpi.USD.rate_float;
      }
    }
    render() {
        return (
            <li>
              <div>
                Coindesk:
                {Math.round(
                  this.decideCurrency(this.props.coindesk.selectedCurrency)
                 * 100) / 100}
                <Loader coin={this.props.coindesk} />
                {this.props.coindesk.selectedCurrency}
              </div>
            </li>
        );
    }
}
function mapStateToProps(state) {
    return {
        coindesk: state.coindesk
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
          coindesk: bindActionCreators(CoindeskActions, dispatch),
          map: bindActionCreators(MapActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coindesk);
