import React, { Component } from 'react';
import Button from '../../../components/ui/Button/Button';
import classes from './CustomerInfo.css';
import axios from '../../../axios-orders';
class CustomerInfo extends Component {
    orderCompleteHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Prateek',
                address: {
                    area: 'blue ridge',
                    city: 'pune',
                    country: 'india'
                }
            },
            deliveryMethod: 'fastest'
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
    }
    render(props) {
        return (
            <div className={classes.CustomerInfo}>
              <h4>Please fill the form</h4>
                <form>
                    {/* <input name='name' placeholder='Enter your name' type='text' />
                    <input name='name' placeholder='Enter your contact number' type='number' />
                    <input name='name' placeholder='Enter your emailId' type='email' /> */}
                    <div style={{ color: '#000 !important' }}>
                        <Button color='#679088' btnType={'Success'} continue = {this.orderCompleteHandler}>Order</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CustomerInfo;