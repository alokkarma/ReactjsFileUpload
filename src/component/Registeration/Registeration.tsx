import * as React from 'react';
import WizardForm from '../common/WizardForm';
type Props = {};
class Registration extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
    }
    submitdata() {
        console.log('inside submit');
    }
    render() {
        return (
            <div>
                <WizardForm onSubmit={this.submitdata} />
            </div>
        );
    }
}
export default Registration;