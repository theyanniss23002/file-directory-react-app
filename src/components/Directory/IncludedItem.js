import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, makeStyles, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Item from './Item';
import Loading from '../shared/Loading';
import { faBook, faFile, faFileAlt, faFileImage } from '@fortawesome/free-solid-svg-icons';
import titles from '../../helpers';

const useStyles = makeStyles({
    title: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 60,
        '& > svg': {
            marginRight: 10
        }
    },
    noData: {
        marginLeft: 50
    }
});

const IncludedItem = ({ isOpen, el, currentId, handleSetCurrentId }) => {
    const classes = useStyles();
    const { loading_included, included_content } = useSelector(({ common }) => common);

    const visibleIcon = (title) =>
        title.includes('jpg') ? (
            <FontAwesomeIcon icon={faFileImage} />
        ) : title.includes('zip') ? (
            <FontAwesomeIcon icon={faFileAlt} />
        ) : title.includes('epub') ? (
            <FontAwesomeIcon icon={faBook} />
        ) : (
            <FontAwesomeIcon icon={faFile} />
        );

    return (
        <>
            <Collapse in={isOpen} timeout={'auto'}>
                {currentId === el.id && loading_included && <Loading linear={true} />}
                {included_content?.[el.id] && included_content?.[el.id].children?.length > 0
                    ? included_content?.[el.id].children.map((item) => (
                          <div key={item.id}>
                              {item?.children ? (
                                  <Item
                                      key={item.id}
                                      el={item}
                                      attachment={true}
                                      currentId={currentId}
                                      handleSetCurrentId={handleSetCurrentId}
                                  />
                              ) : (
                                  <div className={classes.title}>
                                      {visibleIcon(item.title)}
                                      <Typography>{item.title}</Typography>
                                  </div>
                              )}
                          </div>
                      ))
                    : !loading_included && <span className={classes.noData}>{titles.NO_DATA}</span>}
            </Collapse>
        </>
    );
};

IncludedItem.propTypes = {
    isOpen: PropTypes.bool,
    el: PropTypes.object,
    handleSetCurrentId: PropTypes.func,
    currentId: PropTypes.number
};

export default IncludedItem;
