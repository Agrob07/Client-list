import { initState } from "../store";

export function editDataReducer(state = initState, action) {
  switch (action.type) {
    case "EDIT_DATA_LOADING":
      return {
        ...state,
        isEditSuccess: false,
        isEditLoading: true,
      };
    case "EDIT_DATA_SUCCESS":
      return {
        ...state,
        isEditSuccess: true,
        isEditLoading: false,
        clientsList: action.payload.data.map((item, idx, arr) =>
          item.id === action.payload.edit.id
            ? (arr[idx] = action.payload.edit)
            : item
        ),
      };
    case "EDIT_DATA_FAILER":
      return {
        ...state,
        isEditSuccess: false,
        isEditLoading: false,
      };

    default: {
      return state;
    }
  }
}

export const selectisEditclientsList = (state) => state.edit.clientsList;
export const selectisEditSuccess = (state) => state.edit.isEditSuccess;
export const selectisEditLoading = (state) => state.edit.isEditLoading;
