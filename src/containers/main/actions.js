import { REQUEST_STOCKS, REQUEST_STOCKS_SUCCESS, REQUEST_STOCKS_FAIL } from './constants';

export function requestStocks(stocks) {
  return {
    type: REQUEST_STOCKS,
    payload: {
      stocks,
      method: 'GET',
    },
  };
}

export function requestStocksSuccess(data) {
  return {
    type: REQUEST_STOCKS_SUCCESS,
    payload: {
      data,
    },
  };
}

export function requestStocksFail(errors) {
  return {
    type: REQUEST_STOCKS_FAIL,
    payload: errors,
  };
}
