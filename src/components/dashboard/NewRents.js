import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RentIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';

import CardIcon from '../reusables/CardIcon';

const styles = theme => ({
    main: {
        flex: '1',
        marginRight: '1em',
        marginTop: 20
    },
    titleLink: { textDecoration: 'none', color: 'inherit' },
    card: {
        padding: '16px 0',
        overflow: 'inherit',
        textAlign: 'right'
    },
    title: {
        padding: '0 16px'
    },
    value: {
        padding: '0 16px',
        minHeight: 48
    },
    avatar: {
        background: theme.palette.background.avatar
    },
    listItemText: {
        overflowY: 'hidden',
        height: '4em',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical'
    }
});

const location = {
    pathname: 'rents'
};

const NewRents = ({ newRents = [], num, classes }) => (
    <div className={classes.main}>
        <CardIcon Icon={RentIcon} bgColor="#f44336" />
        <Card className={classes.card}>
            <Typography className={classes.title} color="textSecondary">
                New Rents
            </Typography>
            <Typography variant="headline" component="h2" className={classes.value}>
                <Link to={location} className={classes.titleLink}>
                    {num}
                </Link>
            </Typography>
            <Divider />
            <List>
                {newRents.map(record => (
                    <ListItem
                        key={record.rentId}
                        button
                        component={Link}
                        to={`/rents/${record.rentId}/edit`}
                    >
                        <ListItemText
                            primary={`ID: ${record.rentId}`}
                            secondary={`${record.make} ${record.model} ${record.vehicleTypeName}`}
                            className={classes.listItemText}
                            style={{ paddingRight: 0 }}
                        />
                    </ListItem>
                ))}
            </List>
        </Card>
    </div>
);

export default withStyles(styles)(NewRents);
