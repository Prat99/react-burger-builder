import React, { Component } from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/index";
import { Redirect } from 'react-router-dom';
import Spinner from "../../components/ui/Spinner/Spinner";
class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "login",
      isFormValid: false,
      loginForm: {
        email: {
          validationRules: {
            required: true,
            regex: /\S+@\S+\.\S+/
          },
          config: {
            value: "",
            placeholder: "Enter your email"
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
            value: "",
            placeholder: "Enter your password"
          },
          isValid: false,
          isTouched: false
        }
      }
    };
  }

  registerClickHandler = () => {
    const type = this.state.type;
    if (type === "login") {
      this.setState({
        type: "register"
      });
    } else {
      this.setState({
        type: "login"
      });
    }
  };

  checkValidty(rules, value) {
    let isValid = false;
    if (rules.required) {
      isValid = value.trim() !== "";
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
    let isFormValid = true;
    for (const key in authState.loginForm) {
      if (authState.loginForm.hasOwnProperty(key)) {
        if (authState.loginForm[key].isValid && isFormValid) {
          isFormValid = true;
        } else isFormValid = false;
      }
    }
    
    return isFormValid;
  }

  inputValueChangeHandler = (event, id) => {
    // console.log('emailInputHandler', event.target.value);
    // console.log('id', id);
    //const value = event.target.value;
    const updatedForm = { ...this.state.loginForm };
    const updatedFormElement = { ...updatedForm[id] };
    updatedFormElement.isTouched = true;
    const updatedFormElementConfig = { ...updatedFormElement.config };
    updatedFormElementConfig.value = event.target.value;
    if (updatedFormElement.validationRules) {
      updatedFormElement.isValid = this.checkValidty(
        updatedFormElement.validationRules,
        updatedFormElementConfig.value
      );
    }
    updatedFormElement.config = updatedFormElementConfig;
    updatedForm[id] = updatedFormElement;
    let formValidty = this.checkFormValidty();
    this.setState(prevState => {
      return { loginForm: updatedForm, isFormValid: formValidty };
    });
    
  };

  loginBtnHandler = () => {
    const authState = { ...this.state };
    const loginData = { ...this.state.loginForm };
    //console.log("authState", authState);
    if (authState.type === "register")
      this.props.onAuthRegister(
        loginData.email.config.value,
        loginData.password.config.value
      );
    else if (authState.type === "login")
      this.props.onAuthLogin(
        loginData.email.config.value,
        loginData.password.config.value
      );
  };

  // componentDidUpdate() {
  //   console.log('inside auth component did mount');
  //   if(this.props.error) {
  //     alert('some error occured', this.props.error)
  //   }
  //   if(this.props.token && !this.props.showLoader && !this.props.error) {
  //     localStorage.setItem('token', this.props.token);
  //     this.props.history.push('/burger');
  //   }
  // }


  render() {
    let authForm = "";
    if (this.props.showLoader) {
      authForm = <Spinner />;
    }
    let authLogin = null;
    if(this.props.isAuthenticated) {
      localStorage.setItem('token', this.props.token);
      authLogin = <Redirect to='/burger' />
    }
     else {
      authForm = (
        <AuthForm
          formType={this.state.type}
          click={this.registerClickHandler}
          inputChange={this.inputValueChangeHandler}
          btnDisabled={this.state.isFormValid}
          loginBtn={this.loginBtnHandler}
        />
      );
    }
    return <div>
      {authLogin}
    {authForm}
    </div>;
  }
}
const mapState = state => {
  return {
    error: state.auth.error,
    showLoader: state.auth.showLoader,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatch = dispatch => {
  return {
    onAuthRegister: (email, password) =>
      dispatch(authActions.authRegister(email, password)),
    onAuthLogin: (email, password) =>
      dispatch(authActions.authLogin(email, password))
  };
};
export default connect(
  mapState,
  mapDispatch
)(Auth);
