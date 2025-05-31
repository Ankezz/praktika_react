import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, selectItem } from "../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const { items, selectedItem } = useSelector((state) => state.selection);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Items</h1>
      {items.map(item => (
        <div key={item.id} onClick={() => dispatch(selectItem(item))}>
          {item.title}
        </div>
      ))}
      {selectedItem && <p>Selected: {selectedItem.title}</p>}
    </div>
  );
};

export default React.memo(Home);