import React, { useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { loadContent } from './redux/Common/actions';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#51a351',
            contrastText: '#fff'
        }
    }
});

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadContent());
    }, []);

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <ThemeProvider theme={theme}>Hello</ThemeProvider>
        </MuiPickersUtilsProvider>
    );
};

export default App;
