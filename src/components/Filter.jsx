// src/components/Filter.jsx
import React from 'react';
import { FaChevronDown, FaRedo } from 'react-icons/fa';
import { useFilter } from '../context/FilterContext';

const Filter = () => {
  const { filter, setFilter, resetFilter } = useFilter();
  const { selectedItem, inputValue, dropdownValue } = filter;

  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center space-x-4">
        <div className="relative inline-block w-40">
          <select
            value={dropdownValue}
            onChange={(e) => setFilter({ ...filter, dropdownValue: e.target.value })}
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline"
          >
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <FaChevronDown />
          </div>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setFilter({ ...filter, inputValue: e.target.value })}
          className="px-4 py-2 border rounded focus:outline-none focus:shadow-outline"
          placeholder="Type here..."
        />
        <button
          onClick={resetFilter}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 focus:outline-none"
          title="Reset Filter"
        ></button>
      </div>
      <div className="flex overflow-x-auto space-x-4 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 p-4 cursor-pointer ${
              selectedItem === item ? 'bg-blue-500 text-white' : 'bg-gray-200'
            } rounded-lg text-center`}
            onClick={() => setFilter({ ...filter, selectedItem: item })}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
