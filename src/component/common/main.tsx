import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
/* import Home from './Home';  */
import About from '../about/about';
import Course from '../courses/CoursePage';
import RegistrationForm from '../Registeration/RegistrationForm';
const Main = () => (
    <main>
        <Switch>
            {/* <Route exact path="/" component={Home}/> */}
            <Route  path="/about" component={About}/>
            <Route exact path="/" component={RegistrationForm}/>
            <Route  path="/myrequest" component={Course}/>
            {/*<Route  path="/payment" component={Payment}/> */}
        </Switch>
    </main>
);
export default Main;