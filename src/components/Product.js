import { Component } from "react";
import Button from './Button'


//inline styles
const styles = {
    product:{
        border: 'solid 1px #eeeee',
        borderRadius: '10px',
        padding: '3rem',
        margin: '2rem',
        boxShadow: '0 10px 5px rgb(0,0,0,0.1)',
        width: '300px',
        height: '300px',
    },
    images: {
        height: '150px',
        width: '100%',
    }
}

class Product extends Component{
    render(){
        //destructuring to get Product from props
        const { product, addShoppingCart } = this.props
        return(
            <div style={styles.product}>
                <img alt={product.name}  src ={product.img} style={styles.images}/>
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <Button onClick ={() => addShoppingCart(product)}>
                Add to cart
                </Button>
            </div>
        )
    }
}

export default Product