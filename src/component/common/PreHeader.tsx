import * as React from 'react';
const PreHeader = () => {
    return (
        <div>
            <span>Travel</span>
            <div className="dropdown">
                <button className="dropbtn">Change Language
                    <i className="fa fa-caret-down" />
                </button>
                <div className="dropdown-content">
                    <a href="#">Chienese</a>
                    <a href="#">English</a>
                    <a href="#">French</a>
                    <a href="#">German</a>
                    <a href="#">Hindi</a>
                    <a href="#">Italian</a>
                </div>
            </div>
        </div>
    );
};
export default PreHeader;