import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Profile from '../profile';

const styles = {
  root: {
    flexGrow: 1,
    padding: 40,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: 80,
  },
  item: {
    marginLeft: 40,
    marginRight: 40,
  },
};

const ProfileList = ({ classes, stocks }) =>
  (<Grid container className={classes.root}>
    <Grid item xs={12}>
      <Grid container className={classes.demo} justify="center" spacing={Number(40)}>
        {stocks.map(stock =>
          (<Grid key={`grid-${stock.symbol}`} className={classes.item} item>
            <Profile
              key={`profile-${stock.symbol}`}
              stock={stock.symbol}
              logo={'https://storage.googleapis.com/iex/api/logos/AAPL.png'}
              exchange={stock.primaryExchange}
              price={stock.latestPrice}
              latestTime={stock.latestTime}
            />
          </Grid>),
        )}
      </Grid>
    </Grid>
  </Grid>);
ProfileList.propTypes = {
  classes: PropTypes.object.isRequired,
  stocks: PropTypes.array.isRequired,
};

export default withStyles(styles)(ProfileList);
