import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Routes from './router/router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import registerServiceWorker from './registerServiceWorker';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import 'font-awesome/css/font-awesome.css';
import { loadCourses } from './actions/courseActions';
import { initialize, addTranslation, setLanguages } from 'react-localize-redux';

const store = configureStore({});
store.dispatch(loadCourses());
// TODO: Later we will do below i18n and i10n will do dynamically.
const languages = ['en', 'fr', 'es'];
store.dispatch(initialize(languages));
store.dispatch(setLanguages(['en', 'es', 'fr'], 'fr'));
const locales = {
    'welcome': {
        'greeting': [
            'Hello ${ name }!',
            'Bonjour ${ name }!',
            'Bonjour ${ name }!'
        ]
    },
    'info': {
        'greeting': [
            'Hello',
            'Bonjour'
        ]
    }
};
store.dispatch(addTranslation(locales));
ReactDOM.render(
    <Provider store={store}>
            <Routes />
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
