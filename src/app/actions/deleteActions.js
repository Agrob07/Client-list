export function deleteData(payload) {
  return {
    type: "DELETE_DATA_LOADING",
    payload,
  };
}

export function deleteDataSuccess(payload) {
  return {
    type: "DELETE_DATA_SUCCESS",
    payload,
  };
}

export function deleteDataFailer() {
  return {
    type: "DELETE_DATA_FAILER",
  };
}
