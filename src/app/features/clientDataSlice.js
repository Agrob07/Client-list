import { initState } from "../store";

export function clientDataReducer(state = initState, action) {
  switch (action.type) {
    case "FETCH_DATA_LOADING":
      return {
        ...state,
        isDataSuccess: false,
        isDataLoading: true,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        isDataSuccess: true,
        isDataLoading: false,
        clientsList: action.payload,
      };
    case "FETCH_DATA_FAILER":
      return {
        ...state,
        isDataSuccess: false,
        isDataLoading: false,
      };

    default: {
      return state;
    }
  }
}

export const selectUserState = (state) => state.client.clientsList;
export const selectisDataSuccess = (state) => state.client.isDataSuccess;
export const selectisDataLoading = (state) => state.client.isDataLoading;
