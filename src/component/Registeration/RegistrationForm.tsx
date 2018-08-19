import * as React from 'react';
import './form.css';
import axios from 'axios';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/input';

type Props = {
	history: any
};
class RegistrationForm extends React.Component<Props, any> {
	constructor(props: Props) {
		super(props);
		this.state = {
			orderForm: {
				userName: {
					elementType: 'input',
					elementConfig: {
						type: 'text'
					},
					value: '',
					label: 'Full Name'
				},
				imei: {
					elementType: 'input',
					elementConfig: {
						type: 'text'
					},
					value: '',
					label: 'Enter Your IMEI'
				},
				modelName: {
					elementType: 'input',
					elementConfig: {
						type: 'text'
					},
					value: '',
					label: 'Model Name'
				},
				manufacturerName: {
					elementType: 'input',
					elementConfig: {
						type: 'text'
					},
					value: '',
					label: 'Manufacturer Name'
				},
				brandName: {
					elementType: 'input',
					elementConfig: {
						type: 'text'
					},
					value: '',
					label: 'Brand Name'
				},
				deviceType: {
					elementType: 'input',
					elementConfig: {
						type: 'text'
					},
					value: '',
					label: 'Device Type'
				},
				simCapacity: {
					elementType: 'input',
					elementConfig: {
						type: 'number'
					},
					value: '',
					label: 'SIM Capacity'
				}
			},
			loading: false
		}
	}
	componentDidMount() {
		// this.props.history.push('/about');
	}
	public navigateToFile(data:any){
		console.log(data);
		this.props.history.push('/about');
	}
	deviceDetailSubmitHandler = (event: any) => {
		let deviceDetails = {};
		event.preventDefault();
		console.log("inside");
		console.log(this.state.orderForm);
		for (let key in this.state.orderForm) {
			let valueObj = this.state.orderForm[key];
			deviceDetails[key] = valueObj['value']
		}
		let tempArry = [];
		tempArry.push({ imei: deviceDetails['imei'] });
		deviceDetails['imei'] = tempArry
		axios.post('/api/registration/register', deviceDetails)
			.then(response => {
				console.log(response.data.id);
				if(response.data.id) {
					this.props.history.push({
						pathname: '/about',
							id: response.data.id,
					});
				}
			})
			.catch(function (error) {
				
			});
	}
	inputChangedHandler = (event: any, inputIdentifier: any) => {
		const updatedOrderForm = {
			...this.state.orderForm
		};
		const updatedFormElement = {
			...updatedOrderForm[inputIdentifier]
		};
		updatedFormElement.value = event.target.value;
		updatedOrderForm[inputIdentifier] = updatedFormElement;
		this.setState({ orderForm: updatedOrderForm });
	}
	cancelForm = (event: any) => {
		event.preventDefault();
		console.log("Cancel form");
		this.props.history.push('/about');
	}
	render() {
		const formElementsArray = [];
		for (let key in this.state.orderForm) {
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			});
		}
		let form = (
			<form onSubmit={this.deviceDetailSubmitHandler}>
				{formElementsArray.map(formElement => (
					<Input
						key={formElement.id}
						elementType={formElement.config.elementType}
						elementConfig={formElement.config.elementConfig}
						value={formElement.config.value}
						label={formElement.config.label}
						changed={(event: any) => this.inputChangedHandler(event, formElement.id)} />
				))}

				<Button clicked={this.deviceDetailSubmitHandler} btnType="Success">Next &nbsp;<i className="fa fa-arrow-right" /></Button>
				<Button clicked={this.deviceDetailSubmitHandler} btnType="Save">Save &nbsp;<i className="fa fa-paper-plane" /></Button>
				<Button clicked={this.cancelForm} btnType="Cancel">Cancel&nbsp;<i className="fa fa-remove" /></Button>
			</form>
		);
		if (this.state.loading) {
			form = <div>Loading...</div>
		}
		return (
			<div>
				<div>
				<ul className="custProgressbar">
					<li className="active">Mobile Details</li>
					<li>Upload</li>
					<li>Payment</li>
				</ul>
				</div>
				<div className="formHeader" />
				<div className="formWrapper">{form}</div>
			</div>
		);
	}
}

export default RegistrationForm;