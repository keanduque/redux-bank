import { createStore, combineReducers, applyMiddleware } from "redux"; // deprecated in striketrough
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//combine all the reducer
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
});
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
