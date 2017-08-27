import { put, takeLatest, all } from 'redux-saga/effects';
import 'whatwg-fetch';
import { requestStocksSuccess, requestStocksFail } from './actions';
import { REQUEST_STOCKS } from './constants';

const getStock = stock =>
  fetch(`https://api.iextrading.com/1.0/stock/${stock}/quote`)
    .then(res => res.json())
    .then(json => json);

export function* executeRequest(success, fail, action) {
  const stocks = action.payload.stocks;
  const stocksData = yield all(stocks.map(stock => getStock(stock)));

  const errors = stocksData.filter(stock => stock.companyName === null);
  if (errors.length > 0) {
    yield put(
      fail(
        `Error retrieving information of symbol(s): ${errors.map(stock => stock.symbol).join(',')}`,
      ),
    );
  } else {
    yield put(success(stocksData));
  }
}

export function* sagasWatcher() {
  yield takeLatest(REQUEST_STOCKS, executeRequest, requestStocksSuccess, requestStocksFail);
}

export default sagasWatcher;
