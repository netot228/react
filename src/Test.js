import React from 'react';

import Clock from './Clock';
import SimpleForm from './Form';

class Test extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <SimpleForm/>
                <Clock/>
            </React.Fragment>

        );
    }
}

export default Test;
