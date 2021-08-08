import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadContent } from '../../redux/Common/actions';
import Loading from '../shared/Loading';
import { List, makeStyles } from '@material-ui/core';
import Item from './Item';
import titles from '../../helpers';

const useStyles = makeStyles({
    title: {
        paddingLeft: 20
    }
});

const Directory = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const { content, loading_content } = useSelector(({ common }) => common);
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
        dispatch(loadContent());
    }, []);

    const handleSetCurrentId = (id) => setCurrentId(id);

    return (
        <>
            <h1 className={classes.title}>{titles.MAIN_H1}</h1>
            {loading_content && <Loading circular={true} />}
            {content.children?.length > 0 ? (
                <List>
                    {content.children.map((el) => (
                        <Item key={el.id} el={el} currentId={currentId} handleSetCurrentId={handleSetCurrentId} />
                    ))}
                </List>
            ) : (
                !loading_content && <span>{titles.NO_DATA}</span>
            )}
        </>
    );
};

export default Directory;
