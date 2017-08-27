import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { green, teal, grey } from 'material-ui/colors';

import ProfileDetails from '../profileDetails';

const styles = {
  media: {
    height: 200,
    width: 200,
  },
  header: {
    textAlign: 'left',
  },
  card: {
    width: 340,
    borderRadius: 5,
  },
  display: {
    color: grey[50],
  },
  innerCard: {
    width: 360,
    borderRadius: 5,
    marginTop: -16,
    marginLeft: '-8%',
    marginBottom: 16,
    color: grey[50],
    background: `linear-gradient(to right, ${teal[500]}, ${green[600]});`,
  },
};

const Profile = ({ classes, stock, exchange, price, latestTime }) =>
  (<div>
    <Card className={classes.card}>
      <CardHeader className={classes.header} title={stock} subheader={exchange} />
      <CardContent>
        <Card className={classes.innerCard}>
          <CardContent>
            <Typography type="display1" className={classes.display}>
              ${price}
            </Typography>
          </CardContent>
        </Card>
        <ProfileDetails latestTime={latestTime} />
      </CardContent>
    </Card>
  </div>);
Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  stock: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  exchange: PropTypes.string.isRequired,
  latestTime: PropTypes.string.isRequired,
};

export default withStyles(styles)(Profile);
