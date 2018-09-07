import React from 'react';
import Aux from '../../hoc/Aux';

const AuthLayout = (props) => {
    return (
        <Aux>
            <main>
                {props.children}
            </main>
        </Aux>
    );
};
    
export default AuthLayout;