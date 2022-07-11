import {combineReducers, createStore} from 'redux';

import  CategoryReducer from './reducers/category.reducer';
import  ProductReducer from './reducers/product.reducer';

const rootReducer = combineReducers ({
    products: ProductReducer,
    category: CategoryReducer,
});

export default createStore(rootReducer);