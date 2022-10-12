export function requestDataReducer(state = { ...clientDataState }, action) {
  if (action.type === "poxos") {
    return {
      isDataSuccess: false,
      isDataLoading: true,
    };
  }
  return state;
}

export function successDataReducer(state = { ...clientDataState }, action) {
  if (action.type === "poxos") {
    return {
      isDataSuccess: true,
      isDataLoading: false,
      clientsList: action.payload,
    };
  }
  return state;
}

export function failDataReducer(state = { ...clientDataState }, action) {
  if (action.type === "poxos") {
    return {
      isDataSuccess: false,
      isDataLoading: false,
    };
  }
  return state;
}

export function deleteDataReducer(state = { ...clientDataState }, action) {
  if (action.type === "poxos") {
    return {
      isDeleted: true,
    };
  }
  return state;
}

export const clientDataState = {
  clientsList: [],
  isDataSuccess: false,
  isDataLoading: false,
  isDeleted: false,
};

export const selectUserState = (state) => state.clientsList;
