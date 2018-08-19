import { combineReducers } from 'redux';
import courses from './CourseReducer';
import { reducer as formReducer } from 'redux-form';
import { localeReducer } from 'react-localize-redux';

const rootReducer = combineReducers({
    courses,
    form: formReducer,
    locale: localeReducer
});

export default rootReducer;