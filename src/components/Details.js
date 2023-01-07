import { Component } from "react";

const styles ={
    cartDetails:{
        backgroundColor: '#fff',
        position: 'fixed',
        top: '11%',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '200px',
        right: '15%',
        zIndex: '2',
    },
    ul:{
        margin: 0,
        padding: 0,
    },
    product:{
        lisStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItem: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa',
    },
    cleanButton:{
        border: 'none',
        borderRadius: '10px',
        padding: '10px 15px',
        backgroundColor: '#ccd4cb',
        fontWeight: '700',
        margin: '10px',
        cursor: 'pointer',

    }
}

class Details extends Component{
    render(){
        const {cart, cleanCart} = this.props
        console.log(cart)
        return(
            <div style={styles.cartDetails}>
                <ul style={styles.ul}>
                    {cart.map(x => 
                    <li key={x.name} style={styles.product}>
                        <img alt={x.name} src={x.img} width= '50px' height = '32px'/>
                        {x.name} <span>{x.quantity}</span>
                        {console.log(x.name, x.quantity, x.img)}
                        </li>)} 
                </ul>
                <button onClick={cleanCart} style={styles.cleanButton}>
                    Clean cart
                </button>
            </div>
        )
    }
}

export default Details