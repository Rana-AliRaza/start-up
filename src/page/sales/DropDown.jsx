import React from 'react';
import { Select } from 'antd';

// Handle change event when an option is selected
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const DropDown = ({ options, title }) => (
  <div className="dropdown-container">
    <Select
      mode="tags"
      style={{
        width: '100%', // Ensures it takes up the full width
        minWidth: '200px', // Ensures it doesn't shrink too much
        background: 'white',
        color: 'black',
      }}
      placeholder={` ${title}`} // Placeholder for input field
      onChange={handleChange}
      options={options} // Include the title as an option in the list
      dropdownStyle={{
        minWidth: '200px', // Ensures the dropdown doesn't shrink too much
      }}
      tokenRender={(props) => (
        <div
          {...props}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap', // Prevents text from wrapping
            overflow: 'hidden',
            textOverflow: 'ellipsis', // Adds "..." if the text overflows
            border: '1px solid red',
          }}
          className="text-red-800"
        >
          {props.label}
        </div>
      )}
    />
  </div>
);

export default DropDown;
