import * as React from 'react';

const input = (props: any) => {
	console.log(props);
	let inputElement = null;
	let label = <label>{props.label}</label>;
	switch (props.elementType) {
		case ('input'):
			inputElement = <input
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed}
				required={true} />;
			break;
		case ('textarea'):
			inputElement = <textarea
				className="customInputText"
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed} />;
			break;		
		default:
			inputElement = <input
				className="customInputText"
				{...props.elementConfig}
				value={props.value}
				onChange={props.changed} />;
	}

	return (
		<div className="group">
			{inputElement}
			<span className="highlight" />
			<span className="bar" />
			{label}
		</div>
	);

};

export default input;