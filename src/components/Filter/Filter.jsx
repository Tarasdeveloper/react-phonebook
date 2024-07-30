import React from 'react';
import { FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </FilterLabel>
  );
};

export default Filter;
