import axios from 'axios';
import React from 'react';
import IncDecCounter from "./IncDecCounter"
  import { toast } from 'react-toastify';
const Cart = () => {
     function getData(){
       axios.get('http://localhost:5000/api/products/cart',{withCredentials:true}).then((res)=>{
            console.log(res.data.cart);
           setItems(res.data.cart);
        }).catch((err)=>{
            console.log(err);
        });
    }
    function removeItem(_id){
      {axios.get("http://localhost:5000/api/products/cart/remove/"+_id,{withCredentials:true}).then(res=>{
         console.log(res);
        // window.location.reload();
             toast.success("Item removed fom Cart", {
        position: toast.POSITION.TOP_CENTER
      });
       }).catch(err=>console.log(err.message))}
    }
    const [items,setItems]=React.useState([{name:"abc",price:20},{name:"sdsd",price:25},{name:"455",price:56}]);
  // React.useEffect(getData,[]);
    return ( <div className="container" id="cartBody">
      <h1>My Cart</h1>
    <div id='cartTable'  className='container pt-3'>
      
        <table className="table shadow-lg " >
  <thead id="cart-header">
    <tr>
      <th scope="col">Item name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    
     { items.map(item=>
       <tr>
       <td>{item.name}</td>
       <td>{item.price}</td>
       <td>{<IncDecCounter/>}</td>
       <td><input type="button" value="Remove" className='btn btn-danger' onClick={e=>{removeItem(item._id)}}/></td>
       
       </tr>
     )}
   
    
  </tbody>
</table>
    </div></div> );
}
 
export default Cart;