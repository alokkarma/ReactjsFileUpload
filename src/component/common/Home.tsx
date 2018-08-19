import * as React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="homeContent">
            <span>DIRBS stands for Device Identification, Registration, & Blocking System.</span><br/>  
                DIRBS is a country-wide system deployed in cooperation between between the country regulator, 
                operators in that country, and a technology partner that supports the deployment.  The system is 
                intended to check, identify, and discourage non-compliant devices by verifying the installed base 
                of devices currently active in a market and continuing to monitor as new devices are activated.  
                DIRBS can verify that devices have properly allocated identifiers and type approval,
                that devices are not duplicated or stolen, and that device importation is done through legal channels.  
                DIRBS consists of DIRBS Core and a set of DIRBS Interface Systems that interface with DIRBS Core.
                Note that DIRBS Interface Systems may be developed by 3rd party technology partner(s).
            </div>
        );
    }
}
export default Home;