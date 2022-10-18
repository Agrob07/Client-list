import { initState } from "../store";

export function createDataReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_DATA_LOADING":
      return {
        ...state,
        IsCreateSuccess: false,
        isCreateLoading: true,
      };
    case "CREATE_DATA_SUCCESS":
      return {
        ...state,
        IsCreateSuccess: true,
        isCreateLoading: false,
        clientlist: [...action.payload.data, action.payload.values],
      };
    case "CREATE_DATA_FAILER":
      return {
        ...state,
        IsCreateSuccess: false,
        isCreateLoading: false,
      };

    default: {
      return state;
    }
  }
}

export const selectIsCreateLoading = (state) => state.create.isCreateLoading;
export const selectIsCretaeSuccess = (state) => state.create.IsCreateSuccess;
export const selectIsCreateClientList = (state) => state.create.clientlist;
