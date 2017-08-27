import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import mainSagas from '../sagas';

import { fakeApi, fakeStore } from '../__mocks__';
import Main from '../containers/main';

fetchMock.mock(RegExp(/.*MSFT.*/), fakeApi.MSFT).mock(RegExp(/.*FB.*/), fakeApi.FB);

describe('Main', () => {
  const sagaMiddleware = createSagaMiddleware();
  const mockStore = configureStore([sagaMiddleware]);
  let store;

  beforeEach(() => {
    store = mockStore({ main: fakeStore.initialState });
    store.runSaga = sagaMiddleware.run;
    store.runSaga(mainSagas);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main store={store} stocksList={[]} />, div);
  });

  it('render with stocks', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Main store={store} stocksList={['FB', 'MSFT']} />, div);
  });
});
