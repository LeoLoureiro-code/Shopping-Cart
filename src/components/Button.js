import { Component } from "react";


const styles ={
    button:{
        backgroundColor: '#d9d3ca',
        padding: '10px 15px',
        border: 'none',
        outline: 'none',
        borderRadius: '10px',
        fontWeight: '700',
        marginTop: '1rem',
        cursor: 'pointer',
    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button