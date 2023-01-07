import { Component } from "react"
import Logo from './Logo'
import Cart from './Cart'


const styles = {
    navbar:{
        backgroundColor: '#f0dfd3',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        width: '100%',
        justifyContent: 'space-around',
        position: 'fixed',
        boxShadow: '0 2px 3px rbg(0,0,0,0.1)',
    }
}

class Navbar extends Component{
    render(){
        const {cart, isCartVisible, showCart, cleanCart} = this.props
        return(
            <nav style={styles.navbar}>
                <Logo />
                <Cart 
                cart ={cart}
                isCartVisible = {isCartVisible}
                showCart = {showCart}
                cleanCart = {cleanCart}
                />
            </nav>
        )
    }
}


export default Navbar