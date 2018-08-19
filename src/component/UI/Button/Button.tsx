import * as React from 'react';
import './Button.css';
const button = (props: any) => (

	<button
		className={props.btnType}
		onClick={props.clicked}>{props.children}</button>
);
export default button;