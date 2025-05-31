import React, { useCallback, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveData } from '../store/dataSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    dispatch(saveData(name));
  }, [dispatch, name]);

  const title = useMemo(() => 'Главная страница', []);

  return (
    <div>
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default HomePage;