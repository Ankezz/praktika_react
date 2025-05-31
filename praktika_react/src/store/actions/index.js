import axios from "axios";

export const fetchItems = () => async (dispatch) => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
  dispatch({ type: "SET_ITEMS", payload: res.data });
};

export const selectItem = (item) => ({ type: "SELECT_ITEM", payload: item });

export const submitForm = (data) => ({ type: "SUBMIT_FORM", payload: data });