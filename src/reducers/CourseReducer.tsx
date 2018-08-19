import {
    CREATE_COURSE,
    LOAD_COURSE_SUCCESS
} from '../constants';
import { Course } from '../model/course';

export interface AppState {
    courses: Course[];
}
export default function courseReducer(state: AppState['courses'] = [], action: any) {
    switch (action.type) {
        case CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course)];
        case LOAD_COURSE_SUCCESS:
            return action.courses;
        default:
            return state;
    }
}