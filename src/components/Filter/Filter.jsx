import React from 'react';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filters.filters);

  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value)); // Отправляем значение в стор
  };

  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={filterValue} onChange={handleFilterChange} />
    </FilterLabel>
  );
};

export default Filter;
