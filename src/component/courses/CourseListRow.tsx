import * as React from 'react';
// import { Link } from 'react-router-dom';
import { Course } from '../../model/course';

const CourseListRow = ({course}: {course: Course}) => {
    return (
        <tr>
            <td>{course.id}</td>
            <td>{course.userName}</td>
            <td>{course.brandName}</td>
            <td>{course.manufacturerName}</td>
            <td>{course.modelName}</td>
            <td>{course.deviceType}</td>
            <td>{course.simCapacity}</td>
        </tr>
    );
};
export default CourseListRow;