import Avatar from '@material-ui/core/Avatar';
import {
    blue,
    brown,
    cyan,
    deepOrange,
    deepPurple,
    green,
    orange,
    pink,
    purple,
    red} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';

const styles = {
    card: {
        float: 'left',
        margin: '-20px 20px 0 15px',
        zIndex: 100,
        borderRadius: 3
    },
    avatar: {
        float: 'left',
        margin: '-20px 20px 0 15px',
        zIndex: 100,
        width: 54,
        height: 54,
        padding: 14,
        color: '#fff'
    }
};

const LetterAvatar = ({ letters, classes }) => {
    const firstLetter = letters[0].toUpperCase();
    const secondLetter = letters[1].toLowerCase();
    const displayedLetters = firstLetter + secondLetter;

    const colors = [
        deepOrange[500],
        deepPurple[500],
        pink[500],
        red[500],
        green[500],
        blue[500],
        cyan[500],
        brown[500],
        orange[500],
        purple[500],
        purple[300],
        green[300],
        blue[300],
        pink[300],
        cyan[300],
        green[400],
        brown[300],
        brown[400]
    ];
    const randColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <Avatar
            className={`${classes.avatar}`}
            style={{ backgroundColor: randColor }}
        >
            {displayedLetters}
        </Avatar>
    );
};

export default withStyles(styles)(LetterAvatar);
