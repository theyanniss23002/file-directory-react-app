import React, { useState } from 'react';
import { ListItem, ListItemText, makeStyles } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { loadIncludedContent } from '../../redux/Common/actions';
import IncludedItem from './IncludedItem';
import { faFolder, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles({
    item: {
        '& > svg': {
            '&:nth-child(1)': {
                marginRight: 20
            },
            '&:nth-child(2)': {
                marginRight: 10
            }
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

    const { included_content } = useSelector(({ common }) => common);
    const [openFolder, setOpenFolder] = useState(false);

    const handleOpenFolder = () => {
        if (!openFolder) {
            handleSetCurrentId(el.id);
            if (Object.keys(included_content)?.length === 0 || !included_content[el.id]) {
                dispatch(loadIncludedContent(el.id));
            }
            setOpenFolder(true);
        }
        if (openFolder) {
            setOpenFolder(false);
        }
    };

    return (
        <div className={attachment.toString() && classes.attachment}>
            <ListItem button className={classes.item} onClick={handleOpenFolder}>
                {openFolder ? <ExpandLess /> : <ExpandMore />}
                {openFolder ? <FontAwesomeIcon icon={faFolderOpen} /> : <FontAwesomeIcon icon={faFolder} />}
                <ListItemText primary={el.title} />
            </ListItem>
            <IncludedItem isOpen={openFolder} el={el} handleSetCurrentId={handleSetCurrentId} currentId={currentId} />
        </div>
    );
};

Item.propTypes = {
    el: PropTypes.object,
    id: PropTypes.number,
    attachment: PropTypes.bool,
    handleSetCurrentId: PropTypes.func,
    currentId: PropTypes.number
};

export default Item;
