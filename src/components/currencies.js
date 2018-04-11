import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CoinmarketcapActions from '../actions/coinmarketcap';
import * as CoindeskActions from '../actions/coindesk';
import * as MapActions from '../actions/map';

class Currencies extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.changeCurrencyEUR = this.changeCurrencyEUR.bind(this);
        this.changeCurrencyGBP = this.changeCurrencyGBP.bind(this);
        this.changeCurrencyUSD = this.changeCurrencyUSD.bind(this);
    }

    changeCurrencyEUR() {
        this.props.coinmarketcapAction.changeCurrencyToEUR();
        //We need to also call the actual feed to refresh the price for
        //coinmarketcap
        this.props.coinmarketcapAction.getBTCCoinmarketcapEUR();
        this.props.coindeskAction.changeCurrencyToEUR();
        this.props.mapAction.changeViewLatLonEUR();
    }
    changeCurrencyGBP() {
        this.props.coinmarketcapAction.changeCurrencyToGBP();
        //We need to also call the actual feed to refresh the price for
        //coinmarketcap
        this.props.coinmarketcapAction.getBTCCoinmarketcapGBP();
        this.props.coindeskAction.changeCurrencyToGBP();
        this.props.mapAction.changeViewLatLonGBP();
    }
    changeCurrencyUSD() {
        this.props.coinmarketcapAction.changeCurrencyToUSD();
        //We need to also call the actual feed to refresh the price for
        //coinmarketcap's coinmarketcapAction, but not coindesk's one
        this.props.coinmarketcapAction.getBTCCoinmarketcapUSD();
        this.props.coindeskAction.changeCurrencyToUSD();
        this.props.mapAction.changeViewLatLonUS();
    }

    render() {
        return (
            <div>
              <a href='#' onClick={this.changeCurrencyUSD}>USD</a> |
              <a href='#' onClick={this.changeCurrencyGBP}>GBP</a> |
              <a href='#' onClick={this.changeCurrencyEUR}>EUR</a>
            </div>
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
        coinmarketcapAction: bindActionCreators(CoinmarketcapActions, dispatch),
        coindeskAction: bindActionCreators(CoindeskActions, dispatch),
        mapAction: bindActionCreators(MapActions, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Currencies);
