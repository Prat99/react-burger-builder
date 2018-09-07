import React from 'react';
import Aux from '../../hoc/Aux';
import Input from '../ui/Input/Input';
import classes from './AuthForm.css';
const AuthForm = (props) => {
    let form = '';
    if (props.formType === 'login') {
        form = <Aux>
            <div className='row'>
                <div className='col-md-8 col-lg-8 offset-2'>
                    <h4>Login</h4>
                    <form>
                        <div className='form-group'>
                            <Input elementtype='input'
                                label='Email'
                                type='text'
                                id='email'
                                className='form-control'
                                changed={(event, id='email') => props.inputChange(event, id)} />
                        </div>
                        <div className='form-group'>
                            <Input type='password'
                                elementtype='input'
                                label='Password'
                                id='password'
                                className='form-control'
                                changed={(event, id = 'password') => props.inputChange(event, id)} />
                        </div>
                        <button type='button'
                            className='btn btn-success'
                            disabled={!props.BtnDisabled}>Submit</button>
                    </form>
                    <div>
                        <p>Not having account? <a href="JavaScript:void(0);" onClick={props.click}>Register</a></p>
                    </div>
                </div>
            </div>
        </Aux>
    } else if (props.formType === 'register') {
        form = <Aux>
            <h4>Register</h4>
            <form>
                <div className='form-group'>
                    <Input type='text'
                        id='name'
                        className='form-control'
                        elementtype='input'
                        label='Name'
                    />
                </div>
                <div className='form-group'>
                    <Input type='text'
                        id='email'
                        className='form-control'
                        elementtype='input'
                        label='Email'
                    />
                </div>
                <div className='form-group'>
                    <Input type='password'
                        id='password'
                        className='form-control'
                        elementtype='input'
                        label='Password'
                    />
                </div>
                <div className='form-group'>
                    <Input type='cpassword'
                        id='cpassword'
                        className='form-control'
                        elementtype='input'
                        label='Confirm Password'
                    />
                </div>
                <button type='button' className='btn btn-success' disabled={props.loginBtnDisabled}>Submit</button>
                <div>
                    <p>Already having account? <a href="JavaScript:void(0);" onClick={props.click}>Login</a></p>
                </div>
            </form>
        </Aux>
    }
    return (
        <div className={classes.AuthForm}>
            {form}
        </div>
    );
};

export default AuthForm;