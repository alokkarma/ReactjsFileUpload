import * as React from 'react';
import { Course } from '../../model/course';
import CourseListRow from '../courses/CourseListRow';
type buttonProps = {
    showDelete: (event: any) => void;
    courses: Course[];
};
export default class Custom extends React.Component<buttonProps, any> {
    
    render() {
        const {showDelete, courses} = this.props;
        return (
            <div>
                <table className="table customTable">
            <thead>
                <tr>
                    <th onClick={(e) => showDelete(e)}>Id<i className="sortArrow"/></th>
                    <th onClick={(e) => showDelete(e)}>Name<i className="sortArrow"/></th>
                    <th onClick={(e) => showDelete(e)}>Brand<i className="sortArrow"/></th>
                    <th onClick={(e) => showDelete(e)}>Manufacturer<i className="sortArrow"/></th>
                    <th onClick={(e) => showDelete(e)}>Model<i className="sortArrow"/></th>
                    <th onClick={(e) => showDelete(e)}>Device Type<i className="sortArrow"/></th>
                    <th onClick={(e) => showDelete(e)}>Sim Capacity<i className="sortArrow"/></th>
                </tr>
            </thead>
            <tbody>
                {courses.map((course: Course) =>
                    <CourseListRow key={course.id} course={course} />
                )}
            </tbody>
        </table>
              <button onClick={(e) => showDelete(e)}>
                Remove
              </button>
            </div>
        );
      }
}