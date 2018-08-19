import * as React from 'react';
import DeviceDetailPage from '../Registeration/DeviceDetailPage';
import AdditionalDocuments from '../Registeration/AdditionalDocuments';
type Props = {
    onSubmit: () => void;
};
class WizardForm extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }
  nextPage() {
    this.setState({ page: this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
  }

  render() {
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <DeviceDetailPage onSubmit={this.nextPage} />}
        {page === 2 &&
          <AdditionalDocuments
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}
export default WizardForm;
