import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Directory from './components/Directory';

const theme = createTheme({
    palette: {
        secondary: {
            main: '#51a351',
            contrastText: '#fff'
        }
    }
});

const App = () => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <ThemeProvider theme={theme}>
                <Directory />
            </ThemeProvider>
        </MuiPickersUtilsProvider>
    );
};

export default App;
