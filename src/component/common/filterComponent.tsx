import * as React from 'react';
type FilterComponentProps = {
    onClick: (event: any) => void;
};
export default class FilterComponent extends React.Component<FilterComponentProps, any> {
    constructor(props: FilterComponentProps) {
        super(props);
        console.log(props);
        this.state = {
            filterObject : {
                IMEI: '1234567',
                Model: 'Vivo',
                Sim_Capacity: '2'
            }
        };
    }
    render() {
        return (
            <button onClick={(event) => this.props.onClick(this.state.filterObject)}>Filter</button>
        );
    }
}