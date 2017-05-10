import { connect } from 'react-redux'
//the connect function is used to connect the state in the store, to the props of a component
import CartItem from './CartItem'

const mapStateToProps = (state) => {
  return {
    shirts: state
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addItem: (shirt) =>  dispatch({ type: 'ADD_SHIRT', shirt }),
    removeItem: (index) =>  dispatch({ type: 'REMOVE_SHIRT', index })
    calculateTotal: (cost) =>  dispatch({ type: 'CALCULATE_TOTAL', cost })
  }
}

const ContainerForShirtList = connect(mapStateToProps, mapDispatchtoProps)(CartItem)




export default ContainerForShirtList;
