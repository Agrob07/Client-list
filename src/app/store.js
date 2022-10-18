import { createStore, combineReducers, applyMiddleware } from "redux";
import { createDataReducer } from "./features/createDataSLice";
import { clientDataReducer } from "./features/clientDataSlice";
import { deleteDataReducer } from "./features/deleteDataSlice";
import { editDataReducer } from "./features/editDataSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

export let initState = {
  clientsList: [],
  isDataSuccess: false,
  isDataLoading: false,
  isCreateLoading: false,
  IsCreateSuccess: false,
  isDeleteLoading: false,
  IsDeleteteSuccess: false,
  isEditSuccess: false,
  isEditLoading: false,
};

let sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  client: clientDataReducer,
  delete: deleteDataReducer,
  create: createDataReducer,
  edit: editDataReducer,
  initState,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export default store;
