import React, { Component } from 'react';
import Button from '../../../components/ui/Button/Button';
import classes from './CustomerInfo.css';
import axios from '../../../axios-orders';
import Input from '../../../components/ui/Input/Input';
import { connect } from 'react-redux';
class CustomerInfo extends Component {
    state = {
        orderForm: {
            name: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'enter your name',
                    value: '',
                    label: 'Name'
                },
                validationRules: {
                    required: true,
                },
                isValid: false,
                istouched: false,
            },
            street: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'enter your street name',
                    value: '',
                    label: 'Street'
                },
                validationRules: {
                    required: true,
                },
                isValid: false,
                istouched: false
            },
            zipcode: {
                elementtype: 'input',
                elementconfig: {
                    type: 'number',
                    placeholder: 'enter your zipcode',
                    value: '',
                    required: true,
                    label: 'Zipcode'
                },
                validationRules: {
                    required: true,
                    minLength: 3,
                    maxLength: 6
                },
                isValid: false,
                istouched: false
            },
            country: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'enter your country',
                    value: '',
                    label: 'Country'
                },
                validationRules: {
                    required: true,
                },
                isValid: false,
                istouched: false
            },
            email: {
                elementtype: 'input',
                elementconfig: {
                    type: 'text',
                    placeholder: 'enter your email',
                    value: '',
                    label: 'Email'
                },
                validationRules: {
                    required: true,
                    regex: /\S+@\S+\.\S+/
                },
                isValid: false,
                istouched: false,
            },
            deliveryMethod: {
                elementtype: 'select',
                elementconfig: {
                    value: '',
                    label: 'Delivery Option',
                    options: [{ value: 'fastest', displayValue: 'fastest' }, { value: 'cheapest', displayValue: 'cheapest' }]
                },
            }
        },
        isFormValid: false
    }
    orderCompleteHandler = () => {
        this.checkFormValidty();
        if (1) {
            this.setState({ loading: true });
            const customerData = {};
            for (const key in this.state.orderForm) {
                if (this.state.orderForm.hasOwnProperty(key)) {
                    customerData[key] = this.state.orderForm[key].elementconfig.value;
                }
            }
            const order = {
                ingredients: this.props.ingredients,
                price: this.props.totalPrice,
                customerData: customerData
            }
            axios.post('/order.json', order)
                .then((response) => {
                    console.log('order response', response);
                    this.setState({ loading: false });
                })
                .catch((error) => {
                    this.setState({ loading: false });
                    console.log('some error occured', error);
                })
            this.props.history.push('/thankyou')
        } else {
            alert('wrong input');
        }
    }

    checkValidty = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }
        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid;
        }
        if (rules.regex) {
            isValid = rules.regex.test(value) && isValid;
        }

        return isValid;
    }

    checkFormValidty = () => {
        const form = this.state.orderForm;

        for (const key in form) {
            if (!form[key].validationRules && form[key].isValid) {
                this.setState({ isFormValid: false });
            } else {
                this.setState(prevState => {
                    return {
                        isFormValid: true
                    }
                });
            }
        }
    }

    inputValueChange = (event, inputIdentifier) => {
        // console.log(event.target.value);
        // console.log(id);
        // const form = {...this.state.orderForm};
        // const _element = {...form[id]};
        // console.log('_element', _element);
        // _element.elementconfig.value = event.target.value;
        // form[id] = _element;
        // console.log('form', form);
        // this.setState({orderForm: form});
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.istouched = true;
        const updatedFormElementConfig = { ...updatedFormElement.elementconfig }

        updatedFormElementConfig.value = event.target.value;
        if (updatedFormElement.validationRules) {
            updatedFormElement.isValid = this.checkValidty(updatedFormElementConfig.value, updatedFormElement.validationRules)
        }
        updatedFormElement.elementconfig = updatedFormElementConfig;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        console.log('updated form ', updatedFormElement);
        this.setState({ orderForm: updatedOrderForm });
        // spread operator makes shallow copy, so nested objects don't copy(important)
    }
    render(props) {
        let formsElementArray = [];
        let temp = null;
        for (const key in this.state.orderForm) {
            temp = null;
            if (this.state.orderForm.hasOwnProperty(key)) {
                temp = <Input key={key + 1}
                    inputtype={this.state.orderForm[key].elementtype}
                    label={this.state.orderForm[key].elementconfig.label}
                    changed={(event) => this.inputValueChange(event, key)}
                    invalid={!this.state.orderForm[key].isValid}
                    istouched={this.state.orderForm[key].istouched}
                    shouldValidate={this.state.orderForm[key].validationRules}
                    {...this.state.orderForm[key]} />
                formsElementArray.push(temp);
            }
        }
        console.log('forms element array', formsElementArray);
        return (
            <div className={classes.CustomerInfo}>
                <h4>Please fill the form</h4>
                <form>
                    {/* <input name='name' placeholder='Enter your name' type='text' />
                    <input name='name' placeholder='Enter your contact number' type='number' />
                    <input name='name' placeholder='Enter your emailId' type='email' /> */}
                    {/* <Input inputtype="input" label='Name' type='text' placeholder='Enter your name'/>
                    <Input inputtype="email" label='Email' type='email' placeholder='Enter your mail'/> */}
                    {formsElementArray}
                    <div style={{ color: '#000 !important' }}>
                        <Button color='#679088' btnType={'Success'}
                            continue={this.orderCompleteHandler}>Order</Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapState = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
}
export default connect(mapState)(CustomerInfo);