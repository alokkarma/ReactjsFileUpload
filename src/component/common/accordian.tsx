import * as React from 'react';
import FilterComponent from './filterComponent';
type AccordianProps = {
    title: string;
    onClick: (event: any) => void;
};
export default class AccordianComponent extends React.Component<AccordianProps, any> {
    constructor(props: AccordianProps) {
        super(props);
        this.state = { open: false, class: 'accordion' };
        this.handleClick = this.handleClick.bind(this);
        console.log(props);
    }
    handleClick() {
        this.setState({ open: !this.state.open });
    }
    public render() {
        const { open } = this.state;
        return (
                <div className={open ? 'accordion-open' : 'accordion'}>
                    <header className="accordion-header">
                        <h1 className="accordion-heading">
                            <a onClick={this.handleClick}>{this.props.title}</a>
                        </h1>
                    </header>
                    <div className="accordion-content">
                        <ul className="list">
                            <li className="list-item">
                                <div className="data">John Smith</div>
                                <div className="data">XY123456A</div>
                                <div className="data data-right"><a href="#">Remove from opt-outs</a>
                                </div>
                            </li>
                        </ul>
                        <FilterComponent onClick={(event) => this.props.onClick(event)}/>
                    </div>
                </div>
        );
    }
}
