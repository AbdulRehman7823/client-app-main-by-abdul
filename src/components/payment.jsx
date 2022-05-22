import { axios } from 'axios'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout'

const key = "pk_test_51KuvSGJ5s3GMFY7xlZh5LhxrdAGBfMyV3nFZ0EK8WzhxtLWUCpqM20izoZyCNj7NhoTKNfsR3ZBv9ASdsnbYRlyy00uoK5gUmJ"

const payment = ()=> {

    const location = useLocation();
    const [amount,setAmount] = React.useState(20);
     
    const [stripeToken, setStripeToken]= React.useState(null)
    const onToken = (token)=>{
        setStripeToken(token);
    }


    useEffect(()=>{
        const makeRequest =  async ()=>{
            try {
                const res = await axios.post("http://localhost:3000/api/checkout/payment",
                {
                    tokenId:stripeToken.id,
                    amount:{amount},

                });
                console.log(res.data);
                setAmount(location.state.amount);
            } catch (error) {
                console.log(error);
            }
        }
    },[stripeToken])
  return (
    <div
    style={{
        height:"100vh",
       display:"flex",
       justifyContent:"center",
       alignItems:"center"
    }}>
    <StripeCheckout
    name="ARMedicare"
    image = "images/nurseLogo.jpg"
    billingAddress 
    shippingAddress
    description
    amount  = {amount}
    token  = {onToken}
    stripeKey = {key}>
          <button class="btn btn-primary signIn-btn mb-5">
                Pay
              </button>
</StripeCheckout>

    </div>
  )
}

export default payment;