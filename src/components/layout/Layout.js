import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => (
    <Aux>
        <div>header sidebar toolbar</div>
        <main>
            {props.children}
        </main>
    </Aux>
); // returning the converted jsx from stateless component

export default layout;

//stateless components