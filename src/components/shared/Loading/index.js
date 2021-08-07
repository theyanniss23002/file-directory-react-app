import React from 'react';
import { CircularProgress, LinearProgress, makeStyles } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles({
    linear: {
        paddingBottom: 35
    },
    circular: {
        width: '2%',
        height: '3%',
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
});

const Loading = ({ linear = false, circular = false }) => {
    const classes = useStyles();
    return (
        <>
            {linear && (
                <div className={classes.linear}>
                    <LinearProgress />
                </div>
            )}
            {circular && (
                <div className={classes.circular}>
                    <CircularProgress />
                </div>
            )}
        </>
    );
};

Loading.propTypes = {
    linear: PropTypes.bool,
    circular: PropTypes.bool
};

export default Loading;
