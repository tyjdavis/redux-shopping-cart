const initialState = {
  shirts: [
      {
        name: 'ACDC',
        cost: 10
      }
    ]
  }


function reducer (state = initialState, action) {
  switch (action.type) {
  case 'ADD_SHIRT':
    return { ...state, shirts: [...state.shirts, action.shirt] }
  case 'REMOVE_SHIRT':
    return state.filter((_, index) => index !== action.index)
  // case 'CALCULATE_TOTAL':
  //   return state.map((shirt, index) => {
  //     if (index === action.index) {
  //       return { ...shirt, applied: true}
  //     } else {
  //       return shirt
  //     }
  //   })
  default:
    return state
  }
}
// write a little reducer that will let you
// * add a job listing
// * remove a job listing
// * note whether you've applied

export default reducer;
