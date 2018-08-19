import * as React from 'react';
import Footer from './component/common/Footer';
import Header from './component/common/Header';
import Main from './component/common/main';
import PreHeader from './component/common/PreHeader';
class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <div className="preHeader"><PreHeader/></div>
                <div className=""><Header/></div>
                <div className="container main"><Main/></div>
                <div className="appFooter"><Footer/></div>
            </div>
        );
    }
}
export default App;