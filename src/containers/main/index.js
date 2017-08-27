import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestStocks } from './actions';

import ProfileList from '../../components/profileList';

class Main extends Component {
  static defaultProps = {
    stocksList: ['AAPL', 'TSLA', 'MSFT', 'GOOG', 'FB', 'AMZN', 'QCOM', 'AKAM'],
  };

  static propTypes = {
    stocks: PropTypes.array.isRequired,
    getStocks: PropTypes.func.isRequired,
    stocksList: PropTypes.array,
  };

  componentDidMount() {
    const { stocksList } = this.props;
    this.props.getStocks(stocksList);
  }

  render() {
    const { stocks } = this.props;
    return <ProfileList stocks={stocks} />;
  }
}

export default connect(
  state => ({ stocks: state.main.data }),
  dispatch => ({ getStocks: stocks => dispatch(requestStocks(stocks)) }),
)(Main);
