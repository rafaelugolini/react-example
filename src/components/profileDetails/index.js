import React from 'react';
import PropTypes from 'prop-types';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const styles = {
  text: {
    textAlign: 'left',
  },
};

const getTime = (time) => {
  const date = new Date(time).toLocaleString();
  if (date === 'Invalid Date') {
    return time;
  }
  return date;
};

const ProfileDetails = ({ classes, latestTime }) => (
  <List>
    <ListItem>
      <ListItemText className={classes.text} primary={'Last updated'} />
      <ListItemSecondaryAction>
        <p>{getTime(latestTime)}</p>
      </ListItemSecondaryAction>
    </ListItem>
  </List>
);
ProfileDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  latestTime: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProfileDetails);
