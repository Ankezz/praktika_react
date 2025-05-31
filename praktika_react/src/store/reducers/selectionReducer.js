const initialState = {
  selectedItem: null,
  items: []
};

export default function selectionReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return { ...state, items: action.payload };
    case "SELECT_ITEM":
      return { ...state, selectedItem: action.payload };
    default:
      return state;
  }
}