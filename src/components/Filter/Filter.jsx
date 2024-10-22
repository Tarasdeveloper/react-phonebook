import React from 'react';
import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterTerm } from '../../redux/contactsReducer';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.phonebook.filter);

  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilterTerm(value)); // Отправляем значение в стор
  };

  return (
    <FilterLabel>
      <p>Find contacts by name</p>
      <input type="text" value={filterValue} onChange={handleFilterChange} />
    </FilterLabel>
  );
};

export default Filter;
