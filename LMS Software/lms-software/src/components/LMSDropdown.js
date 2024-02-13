import React, { useState } from 'react';

const LMSDropdown = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onSelect(value);
  };

  return (
    <select value={selectedValue} onChange={handleSelectChange} className='bg-blue-700 text-white w-full p-3 text-xl font-bold hover:bg-blue-900 focus:bg-blue-900 outline-none'>
      <option value="">Select an option</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default LMSDropdown;
