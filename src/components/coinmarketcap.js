import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CoinmarketcapActions from '../actions/coinmarketcap';
import * as MapActions from '../actions/map';
import Loader from './loader';

class Coinmarketcap extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.decideCurrency = this.decideCurrency.bind(this);
    }
    componentWillMount() {
        this.props.actions.coinmarketcap.startLoadingBTCCoinmarketcap();
        switch(this.props.coinmarketcap.selectedCurrency) {
          case "EUR":
            this.props.actions.coinmarketcap.getBTCCoinmarketcapEUR();
            break;
          case "GBP":
            this.props.actions.coinmarketcap.getBTCCoinmarketcapGBP();
            break;
          default:
            this.props.actions.coinmarketcap.getBTCCoinmarketcapUSD();
            break;
        }
    }
    decideCurrency(cur) {
      switch(cur) {
          case "EUR":
            return this.props.coinmarketcap.price_eur;
          case "GBP":
            return this.props.coinmarketcap.price_gbp;
          default:
            return this.props.coinmarketcap.price_usd;
      }
    }
    render() {
        return (
            <li>
              Coinmarketcap:
              {Math.round(
                this.decideCurrency(this.props.coinmarketcap.selectedCurrency)
               * 100) / 100}
              <Loader coin={this.props.coinmarketcap} />
              {this.props.coinmarketcap.selectedCurrency}
            </li>
        );
    }
}
function mapStateToProps(state) {
    return {
        coinmarketcap: state.coinmarketcap
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
          coinmarketcap: bindActionCreators(CoinmarketcapActions, dispatch),
          map: bindActionCreators(MapActions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coinmarketcap);
