import React, { Component } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'login',
            isFormValid: false,
            loginForm: {
                email: {
                    validationRules: {
                        required: true,
                        regex: /\S+@\S+\.\S+/
                    },
                    config: {
                        value: '',
                        placeholder: 'Enter your email'
                    },
                    isValid: false,
                    isTouched: false
                },
                password: {
                    validationRules: {
                        required: true,
                        minLength: 6
                    },
                    config: {
                        value: '',
                        placeholder: 'Enter your password'
                    },
                    isValid: false,
                    isTouched: false
                }
            }
        }
    }

    registerClickHandler = () => {
        const type = this.state.type;
        if (type === 'login') {
            this.setState({
                type: 'register'
            });
        } else {
            this.setState({
                type: 'login'
            });
        }
    }

    checkValidty(rules, value) {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.regex) {
            isValid = rules.regex.test(value) && isValid;
        }

        if (rules.minLength) {
            isValid = value.length > rules.minLength && isValid;
        }

        return isValid;
    }

    checkFormValidty() {
        const authState = { ...this.state };
        let isFormValid = false;
        for (const key in authState.loginForm) {
            if (authState.loginForm.hasOwnProperty(key)) {
                if (key.isValid) {
                    isFormValid = true;
                } else isFormValid = false
            }
        }
        return isFormValid;
    }

    inputValueChangeHandler = (event, id) => {
        console.log('emailInputHandler', event.target.value);
        console.log('id', id);
        //const value = event.target.value;
        const updatedForm = { ...this.state.loginForm };
        const updatedFormElement = { ...updatedForm[id] };
        updatedFormElement.isTouched = true;
        const updatedFormElementConfig = { ...updatedFormElement.config };
        updatedFormElementConfig.value = event.target.value;
        if (updatedFormElement.validationRules) {
            updatedFormElement.isValid = this.checkValidty(updatedFormElement.validationRules, updatedFormElementConfig.value);
        }
        updatedFormElement.config = updatedFormElementConfig;
        updatedForm[id] = updatedFormElement;
        this.setState({ loginForm: updatedForm, isFormValid: this.checkFormValidty()});
        console.log('current state', this.state);
    }

    render() {
        return (
            <div>
                <AuthForm formType={this.state.type}
                    click={this.registerClickHandler}
                    inputChange={this.inputValueChangeHandler}
                    btnDisabled={this.state.isFormValid} />
            </div>
        );
    }
}

export default Auth;