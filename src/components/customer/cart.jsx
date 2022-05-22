



import { axios } from 'axios'
import React, { useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'

const key = "pk_test_51KuvSGJ5s3GMFY7xlZh5LhxrdAGBfMyV3nFZ0EK8WzhxtLWUCpqM20izoZyCNj7NhoTKNfsR3ZBv9ASdsnbYRlyy00uoK5gUmJ"

const cart = ()=> {

    const data = [
        { id: "1222",
          title: "Panadol",
          price: 100,
          quantity: 10 
        },
        { id: "232",
        title: "Desprine",
        price: 50,
        quantity: 6 
        },
        { id: "231",
        title: "Jenomet",
        price: 600,
        quantity: 1 
      },
      { id: "342",
      title: "Aminol",
      price: 3000,
      quantity: 1 
    }
    ];



    const [amount,setAmount] = React.useState(20);
     
    const [stripeToken, setStripeToken]= React.useState(null)
    const onToken = (token)=>{
        setStripeToken(token);
    }


    useEffect(()=>{
        const makeRequest =  async ()=>{
            try {
                const res = await axios.post("http://localhost:3000/api/checkout/create-checkout",
                {
                    tokenId:stripeToken.id,
                    order:data,

                });
                console.log(res.data);
            
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
    token  = {onToken}
    stripeKey = {key}>
          <button class="btn btn-primary signIn-btn mb-5">
                Pay
              </button>
</StripeCheckout>

    </div>
  )
}

export default cart;