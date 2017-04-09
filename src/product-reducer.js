import {
  SAVE_PRODUCT,
  DELETE_PRODUCT
} from './constants';


const initialProductsState = {
  productsList:[],
};

export default function (state = initialProductsState, action) {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case SAVE_PRODUCT:
      newState.productsList.push(action.product);
      console.log(newState.productsList);
      break;

    case DELETE_PRODUCT:
      newState.productsList.splice(newState.productsList.indexOf(action.product), 1);
      break;

    default:
      return state;

  }

  return newState;

}