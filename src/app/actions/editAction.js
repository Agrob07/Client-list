export function editData(payload) {
  return {
    type: "EDIT_DATA_LOADING",
    payload,
  };
}

export function editDataSuccess(payload) {
  return {
    type: "EDIT_DATA_SUCCESS",
    payload,
  };
}

export function editDataFailer() {
  return {
    type: "EDIT_DATA_FAILER",
  };
}
