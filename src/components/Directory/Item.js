import React, { useState } from 'react';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadIncludedContent } from '../../redux/Common/actions';
import IncludedItem from './IncludedItem';
import Loading from '../shared/Loading';

const useStyles = makeStyles({
    list: {
        '& > svg': {
            marginRight: 10
        }
    },
    attachment: {
        marginLeft: 30,
        width: '100%',
        maxWidth: 300
    }
});

const Item = ({ el, attachment = false, handleSetCurrentId, currentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { loading_included } = useSelector(({ common }) => common);

    const [openFolder, setOpenFolder] = useState(false);

    const handleOpenFolder = () => {
        if (el.children && !openFolder) {
            handleSetCurrentId(el.id);
            dispatch(loadIncludedContent(el.id));
            setOpenFolder(true);
        }
        if (openFolder) {
            setOpenFolder(false);
        }
    };

    return (
        <div className={attachment.toString() && classes.attachment}>
            <ListItem button className={classes.list} onClick={handleOpenFolder}>
                {openFolder ? <ExpandLess /> : <ExpandMore />}
                <ListItemText primary={el.title} />
            </ListItem>
            {currentId === el.id && loading_included && <Loading linear={true} />}
            <IncludedItem isOpen={openFolder} el={el} handleSetCurrentId={handleSetCurrentId} currentId={currentId} />
        </div>
    );
};

Item.propTypes = {
    el: PropTypes.object,
    id: PropTypes.number,
    attachment: PropTypes.any,
    handleSetCurrentId: PropTypes.func,
    currentId: PropTypes.number
};

export default Item;
