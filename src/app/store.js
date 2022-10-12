import { createStore, combineReducers } from "redux";
import {
  successDataReducer,
  deleteDataReducer,
  requestDataReducer,
  failDataReducer,
} from "./features/clientDataSlice";
import { clientDataState } from "./features/clientDataSlice";

const store = createStore(
  combineReducers({
    requestDataReducer,
    successDataReducer,
    deleteDataReducer,
    failDataReducer,
  }),
  {
    clientData: clientDataState,
  }
);

export default store;
