import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from '../common/RenderField';

type Props = {
    onSubmit: () => void;
};
class DeviceDetailPage extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    submitdata() {
        console.log('inside submit');
    }
    render() {
        return (
            <div>
                <p>Device detail page</p>
                <form onSubmit={this.props.onSubmit}>
                    <Field
                        name="firstName"
                        type="text"
                        component={RenderField}
                        label="First Name"
                    />
                    <Field
                        name="lastName"
                        type="text"
                        component={RenderField}
                        label="Last Name"
                    />
                    <div>
                        <button type="submit" className="next">Next</button>
                    </div>
                </form>
            </div>
        );
    }
}
// export default DeviceDetailPage;
export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  })(DeviceDetailPage as any); // TODO will see