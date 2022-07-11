import {products} from '../../constants/data/index';

const initialState = {
    products,
    filterProducts: [],
    selected: null,

}


const ProductReducer = (state = initialState, action) => {
    return state
}

export default ProductReducer;
