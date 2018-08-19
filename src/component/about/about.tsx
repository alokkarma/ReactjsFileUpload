import * as React from 'react';
// import People from './people';
import FileSelector from '../FileUpload/fileUpload';
type Props = {
    location: any;
};
class About extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        console.log(props);
        const people = [];
        for (let i = 0; i < 10; i++) {
            people.push({
                name: i,
                country: i + i
            });
        }
        this.state = {people};
    }
    componentDidMount() {
        console.log(this.props.location.id);
    }
    public render() {

        return (
            <div>
            {/* <People persons={this.state.people}/> */}
            <FileSelector id= {this.props.location.id}/>
        </div>
        );
    }
}
export default About;
