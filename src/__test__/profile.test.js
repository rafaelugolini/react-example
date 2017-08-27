import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Profile from '../components/profile';

describe('Profile', () => {
  const defaultProps = {
    stock: 'FB',
    price: 166.23,
    exchange: 'Nasdaq Global Select',
    latestTime: 'August 25, 2017',
  };

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Profile {...defaultProps} />, div);
  });

  describe('shallow', () => {
    it('should mount the Profile', () => {
      const profile = shallow(<Profile {...defaultProps} />);
      // stock
      expect(profile.html()).toContain(
        '<span class="MuiTypography-root-39 MuiTypography-headline-44 MuiCardHeader-title-36">FB</span>',
      );
      // exchange
      expect(profile.html()).toContain(
        '<span class="MuiTypography-root-39 MuiTypography-body1-48 MuiTypography-colorSecondary-59 MuiCardHeader-subheader-37">Nasdaq Global Select</span',
      );
      // price
      expect(profile.html()).toContain(
        '<h1 class="MuiTypography-root-39 MuiTypography-display1-43 Profile-display-4">$166.23</h1>',
      );
      // latestTime
      expect(profile.html()).toContain('<p>2017-8-25 00:00:00</p>');
    });
  });
});
