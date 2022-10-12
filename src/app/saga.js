import { call, takeEvery, put, all } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { config } from "../helpers/config";
import CRUDservice from "../helpers/CrudService";
import {
  deleteDataReducer,
  successDataReducer,
} from "./features/clientDataSlice";

export function* fetchDataSaga(action) {
  debugger;
  try {
    let result = yield call(() =>
      CRUDservice.getItems(`${config.baseURL}/?_limit=4`)
    );
    yield put(successDataReducer(result.data));
  } catch (e) {}
}

export function* deleteDataSaga(action) {
  try {
    yield call(() => {
      const url = `${config.baseURL}/${action.control}`;
      CRUDservice.deleteItems(url);
    });
    yield put(deleteDataReducer());
  } catch (e) {}
}

// export function* createDataSaga(action) {
//   console.log(action.values, "create");
//   try {
//     yield call(() => {
//       CRUDservice.postItems(config.baseURL, action.values);
//     });
//     yield put(successFetchData(true));
//   } catch (e) {
//     yield put(successFetchData(false));
//   }
// }

// export function* editDataSaga(action) {
//   console.log(action.values, "edit");
//   try {
//     yield call(() => {
//       const url = `${config.baseURL}/${action.id}`;
//       CRUDservice.putItems(url, action.values);
//     });
//     yield put(successFetchData(true));
//   } catch (e) {
//     yield put(successFetchData(false));
//   }
// }

export default function* watchAll() {
  yield all([
    takeEvery(sagaActions.FETCH_DATA, fetchDataSaga),
    takeEvery(sagaActions.DELETE_USER_REQUESTED, deleteDataSaga),
    // takeEvery(sagaActions.CREATE_USER_REQUESTED, createDataSaga),
    // takeEvery(sagaActions.EDIT_USER_REQUESTED, editDataSaga),
  ]);
}
