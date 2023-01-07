import { Component } from "react";


const styles ={
    title:{
        marginBottom: '30px',
        marginLeft: '50px',
    }
}

class Title extends Component{
    render(){
        return(
            <h1 style={styles.title}>Vegetables</h1>
        )
    }
}


export default Title