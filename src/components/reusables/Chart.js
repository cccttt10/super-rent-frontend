import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Line } from 'react-chartjs-2';

const styles = {
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
        marginBottom: 20
    },
    card: {
        minHeight: 200,
        padding: 20
    }
};

const Chart = ({ classes, data, title }) => (
    <div className={classes.main}>
        <Card className={classes.card}>
            <Typography gutterBottom variant="h5" component="h2" color="primary">
                {title}
            </Typography>
            <Line data={data.data} options={data.options} />
        </Card>
    </div>
);

export default withStyles(styles)(Chart);
