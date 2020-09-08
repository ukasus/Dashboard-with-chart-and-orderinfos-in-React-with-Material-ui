import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { addShipping } from './actions/cartActions'
import { Link } from 'react-router-dom'
class Recipe extends Component {





    render() {

        return (
            <div className="container">
                <div className="collection">

                    <li className="collection-item"><b>Total: {this.props.total} Rupay</b></li>
                </div>
                <div className="checkout">
                    <Link className="waves-effect waves-light btn" to='/orderSummary'>Checkout</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}



export default connect(mapStateToProps)(Recipe);