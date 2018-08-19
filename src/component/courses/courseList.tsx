import * as React from 'react';
import CourseListRow from './CourseListRow';
import { Course } from '../../model/course';

const CourseList = ({ courses }: { courses: Course[] }, showDelete: any) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th onClick={() => showDelete()}>Id</th>
                    <th>Name</th>
                    <th>Brand Name</th>
                    <th>Manufacturer Name</th>
                    <th>Model Name</th>
                    <th>Device Type</th>
                    <th>Sim Capacity</th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course: Course) =>
                    <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
    );
};
export default CourseList;