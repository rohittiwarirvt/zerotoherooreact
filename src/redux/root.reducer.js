import { combineReducers }  from "redux";
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/user.reducers";
import cartReducer from './cart/cart.reducers';
import directoryReducers from "./directory/directory.reducers";
import shopReducers from "./shop/shop.reducers";


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['cart']
}

const rootReducers = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducers,
    shop: shopReducers
});

export default persistReducer(persistConfig, rootReducers);