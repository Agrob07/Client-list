import { initState } from "../store";

export function deleteDataReducer(state = initState, action) {
  switch (action.type) {
    case "DELETE_DATA_LOADING":
      return {
        ...state,
        IsDeleteteSuccess: false,
        isDeleteLoading: true,
      };
    case "DELETE_DATA_SUCCESS":
      return {
        ...state,
        IsDeleteteSuccess: true,
        isDeleteLoading: false,
        clientlist: action.payload,
      };
    case "DELETE_DATA_FAILER":
      return {
        ...state,
        IsDeleteteSuccess: false,
        isDeleteLoading: false,
      };

    default: {
      return state;
    }
  }
}

export const selectIsDeleteLoading = (state) => state.delete.isDeleteLoading;
export const selectisDeleteSuccess = (state) => state.delete.IsDeleteteSuccess;
export const selectisDeleteClientList = (state) => state.delete.clientlist;
