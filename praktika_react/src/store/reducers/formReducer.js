const initialState = {
  name: "",
  email: ""
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case "SUBMIT_FORM":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}