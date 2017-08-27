import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ProfileList from '../components/profileList';
import Profile from '../components/profile';

describe('Profile', () => {
  // same values we receive from reducer
  const stocks = [
    {
      symbol: 'FB',
      latestPrice: 166.23,
      primaryExchange: 'Nasdaq Global Select',
      latestTime: 'August 25, 2017',
    },
    {
      symbol: 'MSFT',
      latestPrice: 72.65,
      primaryExchange: 'Nasdaq Global Select',
      latestTime: 'August 25, 2017',
    },
  ];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileList stocks={stocks} />, div);
  });

  describe('shallow', () => {
    it('should mount the ProfileList and render profiles', () => {
      const profile = mount(<ProfileList stocks={stocks} />);
      // stock
      expect(profile.find(Profile).length).toEqual(stocks.length);
    });
  });
});
