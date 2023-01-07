import { Component } from 'react'
import Products from './components/Products'
import Layout from'./components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'
import Tomato from './products/tomato.jpg'
import Lettuce from './products/lettuce.jpg'
import Peas from './products/chickpeas.jpg'
import Celery from './products/celery.jpg'
import Carrot from './products/carrot.jpg'
import Broccoli from './products/broccoli.jpg'
import Spinach from './products/spinach.jpg'
import Radishes from './products/radishes.jpg'



const styles ={
  page: {
    maxWidth: '100vw',
  }
}

class App extends Component{

  state={
    products: [
      { name: 'Tomato', price: '0.55', img: Tomato},
      { name: 'Lettuce', price: '1.10', img: Lettuce},
      { name: 'Chickpeas', price: '1.20', img: Peas},
      { name: 'Celery', price: '1.35', img: Celery},
      { name: 'Carrot', price: '0.40', img: Carrot},
      { name: 'Broccoli', price: '0.90', img: Broccoli},
      { name: 'Spinach', price: '1.20', img: Spinach},
      { name: 'Radishes', price: '2.00', img: Radishes},
    ],
    cart:[],
    
    isCartVisible: false,
  }

  addShoppingCart = (product) =>{
    const {cart} = this.state
    if(cart.find(x => x.name === product.name)){
      const newCart =  cart.map(x => x.name === product.name
        ? ({
          ...x,
          quantity: x.quantity + 1
        })
        : x)

        return this.setState({cart: newCart})
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        quantity: 1,
      })
    })

  }

  showCart = () =>{
    if(!this.state.cart.length){
      return
    }
    this.setState({isCartVisible: !this.state.isCartVisible})
  }

  cleanCart = () =>{
    if(this.state.cart.length > 0){
      this.setState({cart: []})
      this.showCart()
    }
  }

  render(){
    const {isCartVisible} = this.state
    return(
      <div style={styles.page}>
        <Navbar 
        cart={this.state.cart} 
        isCartVisible={isCartVisible} 
        showCart={this.showCart}
        cleanCart = {this.cleanCart}/>
        <Layout>
          <Title />
          <Products  
            addShoppingCart = {this.addShoppingCart}
            products={this.state.products}
        />
        </Layout>
      </div>
    )
  }
}


export default App;
