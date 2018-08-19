import * as React from 'react';
type Props = {
    input: any;
    label: string;
    type: string
    meta: {
        touched: boolean;
        error: any
    }
};
const RenderField: React.SFC<Props> = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <div>
                <input {...props.input} placeholder={props.label} type={props.type} />
                {props.meta.touched && props.meta.error && <span>{props.meta.error}</span>}
            </div>
        </div>
    );
};
export default RenderField;
