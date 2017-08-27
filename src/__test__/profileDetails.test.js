import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ProfileDetails from '../components/profileDetails';

describe('ProfileDetails', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProfileDetails latestTime={'August 25, 2017'} />, div);
  });

  describe('mount', () => {
    it('should mount the ProfileDetails', () => {
      const dateString = 'August 25, 2017';
      const details = mount(<ProfileDetails latestTime={dateString} />);
      const latestTime = (
        <p>
          {new Date(dateString).toLocaleString()}
        </p>
      );
      expect(details.contains(latestTime)).toEqual(true);
    });
  });
});
