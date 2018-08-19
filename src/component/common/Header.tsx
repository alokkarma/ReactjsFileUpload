import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    state = {
        navCollapsed: true
    };
    _onToggleNav = () => {
        this.setState({navCollapsed: !this.state.navCollapsed});
    }

    render() {
        const {navCollapsed} = this.state;

        return (
            <nav className="navbar navbar-default">
                <div className="navbar-header">
                    <button
                        aria-expanded="false"
                        className="navbar-toggle collapsed"
                        onClick={this._onToggleNav}
                        type="button"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                        <span className="icon-bar"/>
                    </button>
                </div>
                <div className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}>
                    <ul className="nav navbar-nav navbar-right">
                   {/*  <li>
                        <NavLink exact to="/" activeClassName="active">
                        <i className="fa fa-home"/>&nbsp;&nbsp;Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li> */}
                    <li>
                        <NavLink exact to="/" activeClassName="active">
                        <i className="fa fa-edit"/>&nbsp;&nbsp;Register Device</NavLink>
                    </li>  
                    <li>
                        <NavLink to="/myrequest" activeClassName="active">
                        <i className="fa fa-envelope"/>&nbsp;&nbsp;My Jobs</NavLink>
                    </li>
                    <li>
                        <a><i className="fa fa-cogs"/></a>
                    </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;