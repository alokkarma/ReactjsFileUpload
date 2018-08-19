// import courseApi from '../api/mockCourseApi';
import  axios from 'axios';
export function loadCoursesSuccess(courses: {}) {

    return {type: 'LOAD_COURSE_SUCCESS', courses};
}
export function loadCourses() {
    return function(dispatch: any) {
        return axios.get('/api/registration/list')
            .then(function(response: any) {
                dispatch(loadCoursesSuccess(response.data));
            }).catch((error: string) => {
                throw(error);
            });
    };
}

/* export function loadCourses() {
    return function(dispatch: any) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
} */
