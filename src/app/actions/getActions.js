export function fetchData(payload) {
  return {
    type: "FETCH_DATA_LOADING",
    payload,
  };
}

export function fetchDataSuccess(payload) {
  return {
    type: "FETCH_DATA_SUCCESS",
    payload,
  };
}

export function fetchDataFailuer(payload) {
  return {
    type: "FETCH_DATA_FAILUER",
    payload,
  };
}
