import { Component } from "react";
import Product from './Product'

// inline styles
const styles = {
    products: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    }
}
class Products extends Component{
    render(){
        const {products, addShoppingCart} = this.props;

        return(
            <div  style={styles.products}>
                {products.map(product =>
                <Product 
                    addShoppingCart={addShoppingCart}
                    key={product.name}
                    product={product}
                />)}
            </div>
        )
    }
}

export default Products;