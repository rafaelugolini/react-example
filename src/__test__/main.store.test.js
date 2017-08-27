import { expectSaga } from 'redux-saga-test-plan';
import fetchMock from 'fetch-mock';
import { fakeApi, fakeStore } from '../__mocks__';
import { requestStocks } from '../containers/main/actions';
import mainSagas from '../containers/main/sagas';
import mainReducer from '../containers/main/reducer';

fetchMock
  .mock(RegExp(/.*MSFT.*/), fakeApi.MSFT)
  .mock(RegExp(/.*FB.*/), fakeApi.FB)
  .mock(RegExp(/.*FAKESYMBOL.*/), fakeApi.FAKESYMBOL);

describe('Sagas', () => {
  const stocksLits = ['FB', 'MSFT'];

  it('request success', () =>
    expectSaga(mainSagas)
      .withReducer(mainReducer)
      .hasFinalState(fakeStore.successState)
      .dispatch(requestStocks(stocksLits))
      .run({ timeout: 500, silenceTimeout: true }));

  it('request fail', () =>
    expectSaga(mainSagas)
      .withReducer(mainReducer)
      .hasFinalState(fakeStore.failState)
      .dispatch(requestStocks(['FAKESYMBOL']))
      .run({ timeout: 500, silenceTimeout: true }));
});
