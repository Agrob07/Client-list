import { config } from "../helpers/config";
import CRUDservice from "../helpers/crudservice";
import { call, takeEvery, put, all } from "redux-saga/effects";
import { editDataFailer, editDataSuccess } from "./actions/editAction";
import { fetchDataSuccess, fetchDataFailuer } from "./actions/getActions";
import { createDataFailer, createDataSuccess } from "./actions/createAction";
import { deleteDataFailer, deleteDataSuccess } from "./actions/deleteActions";

export function* fetchDataSaga() {
  try {
    const result = yield call(() =>
      CRUDservice.getItems(`${config.baseURL}/?_limit=4`)
    );
    yield put(fetchDataSuccess(result.data));
  } catch (e) {
    yield put(fetchDataFailuer());
  }
}

export function* deleteDataSaga(action) {
  const url = `${config.baseURL}/${action.payload.id}`;
  try {
    yield CRUDservice.deleteItems(url);
    yield put(deleteDataSuccess(action.payload.data));
  } catch (e) {
    yield put(deleteDataFailer());
  }
}

export function* createDataSaga(action) {
  try {
    const result = yield CRUDservice.postItems(
      config.baseURL,
      action.payload.values
    );
    yield put(
      createDataSuccess({ data: action.payload.data, values: result.data })
    );
  } catch (e) {
    yield put(createDataFailer());
  }
}

export function* editDataSaga(action) {
  const url = `${config.baseURL}/${action.payload.edit.id}`;
  try {
    yield CRUDservice.putItems(url, action.payload.edit);
    yield put(editDataSuccess(action.payload));
  } catch (e) {
    yield put(editDataFailer());
  }
}

export default function* watchAll() {
  yield all([
    takeEvery("FETCH_DATA_LOADING", fetchDataSaga),
    takeEvery("DELETE_DATA_LOADING", deleteDataSaga),
    takeEvery("CREATE_DATA_LOADING", createDataSaga),
    takeEvery("EDIT_DATA_LOADING", editDataSaga),
  ]);
}
