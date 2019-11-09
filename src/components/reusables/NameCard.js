import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const styles = {
    main: {
        flex: '1',
        marginLeft: '1em',
        marginTop: 20,
        marginBottom: 20
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
    },
    githubIcon: {
        fontSize: '1.8rem',
        paddingRight: 0,
        paddingLeft: 0
    }
};

function NameCard({ classes, name, photo, github, linkedin, text }) {
    return (
        <div className={classes.main}>
            <Avatar src={photo} className={classes.avatar} variant="circle" />
            <Card className={classes.mainCard}>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h1"
                        color="primary"
                    >
                        {name}
                    </Typography>
                    {text}
                </CardContent>

                <CardActions disableSpacing>
                    <Button
                        size="small"
                        color="primary"
                        className={classes.githubIcon}
                        href={github}
                    >
                        <i className="fab fa-github" />
                    </Button>
                    <Button
                        size="small"
                        color="primary"
                        className={classes.githubIcon}
                        href={linkedin}
                    >
                        <i className="fab fa-linkedin" />
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default withStyles(styles)(NameCard);
