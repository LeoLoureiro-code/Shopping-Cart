import { Component } from "react"
import BubbleAlert from './BubbleAlert'
import Details from './Details'


const styles ={
    cart:{
        backgroundColor: '#359a2c',
        color: '#ffff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        outline: 'none',
        cursor: 'pointer',
    },
    bubble:{
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Cart extends Component{
    render(){

        const {cart, isCartVisible, showCart, cleanCart} = this.props
        const quantity = cart.reduce((acc, el) => acc + el.quantity, 0)
        return(
            <div>
                
                <span style={styles.bubble}>
                    {quantity !== 0
                    ?  <BubbleAlert value = {quantity}/>
                : null}  
                </span>
                <button onClick={showCart} style={styles.cart}>
                    Cart
                </button>
                {isCartVisible ? <Details cart = { cart } cleanCart={cleanCart}/> : null }
                
            </div>
        )
    }
}

export default Cart