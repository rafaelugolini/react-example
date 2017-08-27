import React from 'react';
import PropTypes from 'prop-types';

import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';

const styles = {
  text: {
    textAlign: 'left',
  },
};

const ProfileDetails = ({ classes, latestTime }) =>
  (<List>
    <ListItem>
      <ListItemText className={classes.text} primary={'Last updated'} />
      <ListItemSecondaryAction>
        <p>
          {new Date(latestTime).toLocaleString()}
        </p>
      </ListItemSecondaryAction>
    </ListItem>
  </List>);
ProfileDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  latestTime: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProfileDetails);
