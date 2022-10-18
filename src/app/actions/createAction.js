export function createData(payload) {
  return {
    type: "CREATE_DATA_LOADING",
    payload,
  };
}

export function createDataSuccess(payload) {
  return {
    type: "CREATE_DATA_SUCCESS",
    payload,
  };
}

export function createDataFailer() {
  return {
    type: "CREATE_DATA_FAILER",
  };
}
