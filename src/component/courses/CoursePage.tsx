import * as React from 'react';
import { connect } from 'react-redux';
import { Course } from '../../model/course';
import CourseListRow from './CourseListRow';
import AccordianComponent from '../common/accordian';
import { getTranslate, getActiveLanguage, Translate, setActiveLanguage } from 'react-localize-redux';

type CoursePageProps = {
    title: string;
    courses: Course[];
    createCourse: () => void;
    currentLanguage: string,
    translate: Translate
    setActiveLanguage: () => void;
};
class CoursePage extends React.Component<CoursePageProps, any> {
    constructor(props: CoursePageProps) {
        super(props);
        this.state = {
               data : {
                columnName : '',
                sortOrder : '',
                currentPage : 1,
                pageSize : 3,
                searchText: ''
        }
        };
        this.showDelete = this.showDelete.bind(this);
        this._sortClass = this._sortClass.bind(this);
        // this.sortChanged = this.sortChanged.bind(this);
    
    }
    showDelete(event: any) {
        console.log(event.currentTarget.innerText);
    }
    
    sortChanged (e: any, order: string) {
        const Data = this.state.data;
        Data.sortOrder = order.toString().toLowerCase() === 'asc' ? 'desc' : 'asc';
        Data.columnName = e.currentTarget.innerText;
        this.setState({data: Data});   
        console.log(this.state);
    }
    _sortClass(sortName: string) {
        let icon;
        if (this.state.data.sortOrder === 'asc') {
            icon = 'fa fa-long-arrow-up';
        } else {
            icon = 'fa fa-long-arrow-down';
        }
        return 'fa fa-fw ' + ((sortName === this.state.data.columnName) ? 
        ('fa-sort-' + icon) : '');
    }
    _filter(event: any) {
        console.log(event);
        console.log('filter object');
    }
    render() {
        return (
            <div className="row">
                <AccordianComponent title="Advance Filter" onClick={(event) => {this._filter(event); }}/>
                <table className="table table-hover customTable">
                <thead>
                            <tr>
                                <th onClick={(e) => { this.sortChanged(e, this.state.data.sortOrder); }}>
                                Id
                                    <i className={this._sortClass('Id')}/></th>
                                <th onClick={(e) => { this.sortChanged(e, this.state.data.sortOrder); }}>
                                    Name
                                    <i className={this._sortClass('Name')}/></th>
                                <th onClick={(e) => { this.sortChanged(e, this.state.data.sortOrder); }}>
                                Brand
                                    <i className={this._sortClass('Brand')}/>
                                </th>
                                <th onClick={(e) => { this.sortChanged(e, this.state.data.sortOrder); }}>
                                Manufacturer
                                    <i className={this._sortClass('Manufacturer')}/>
                                </th>
                                <th onClick={(e) => { this.sortChanged(e, this.state.data.sortOrder); }}>
                                Model
                                    <i className={this._sortClass('Model')}/>
                                </th>
                                <th onClick={(e) => { this.sortChanged(e, this.state.data.sortOrder); }}>
                                Device Type
                                    <i className={this._sortClass('Device Type')}/>
                                </th>
                                <th onClick={this.sortChanged.bind(this, 'SimCapacity', this.state.data.sortOrder)}>
                                Sim Capacity
                                    <i className={this._sortClass('SimCapacity')}/>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.courses.map((course: Course) =>
                    <CourseListRow key={course.id} course={course} />
                )}
                </tbody>
                </table>
                <h3>{this.props.translate('welcome.greeting', {name: 'User'})}</h3>
                {/*<button onClick={ () => setActiveLanguage('en') }>English</button>*/}
            </div>
        );
    }
}
function mapStateToProps(state: any) { // here state is coming from store
    console.log(state);
    return {
        courses: state.courses,
        translate: getTranslate(state.locale),
        currentLanguage: getActiveLanguage(state.locale).code
    };
}
const mapDispatchToProps = { setActiveLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);