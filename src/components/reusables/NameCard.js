import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import PhotoChuntong from '../..//img/chuntong.JPG';
// import PhotoFrank from '../../img/frank.JPG';
// import PhotoLily from '../../img/lily.JPG';

const styles = {
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 35
    },
    mainCard: {
        overflow: 'inherit',
        textAlign: 'right',
        padding: 16,
        minHeight: 52
    },
    avatar: {
        float: 'left',
        margin: '-20px 20px 0 15px',
        zIndex: 100,
        width: 100,
        height: 100,
        overflow: 'hidden'
    }
};

function NameCard({ classes }) {
    return (
        <div className={classes.main}>
            <Avatar
                src={PhotoChuntong}
                className={classes.avatar}
                variant="circle"
            />
            <Card className={classes.mainCard}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        color="primary"
                    >
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with
                        over 6,000 species, ranging across all continents except
                        Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default withStyles(styles)(NameCard);
