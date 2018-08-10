import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar></Toolbar>
        <main>
            {props.children}
        </main>
    </Aux>
); // returning the converted jsx from stateless component

export default layout;

//stateless components