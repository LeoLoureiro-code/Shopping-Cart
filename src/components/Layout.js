import { Component } from "react";

const styles ={
    layout:{
        backgroundColor: '#ebf0e6',
        color: '#A0283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    container:{
        maxWidth: '1200px',
        marginTop: '100px',
    }
}

class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout