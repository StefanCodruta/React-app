import React, { Component } from 'react'

class Product extends Component {
    render() {
        return (
            <div>
                Id: {this.props.id} |
                Name: {this.props.name} |
                Price: {this.props.price} 
                <input type="button" value="buy" onClick={() => this.props.onBuy(this.props.price)}/>
            
            </div>
        )
    }
    
}

export default Product