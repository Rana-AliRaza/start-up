import React from 'react';
import Heading from '../../components/shared/heading';
import Cards from "../../components/shared/Cards";
import DropDown from './dropDown';
import Button from '../../components/shared/button';

import filterimg from '/images/filter.png';

const Sales = () => {
  const salesData = [
    {
      id: 1,
      label: '$150,000',
      desc: 'Total Revenue (Month)',
      color: '#D780FE',
    },
    {
      id: 2,
      label: '$12,500',
      desc: 'Total Sales (Today)',
      color: '#FFB780',
    },
    {
      id: 3,
      label: '$22,000',
      desc: 'Pending Payments',
      color: '#79DC8E',
    },
    {
      id: 4,
      label: '350',
      desc: 'Number of Transactions',
      color: '#7E81C8',
    },
  ];

  const dropDownData = [
    [
      { value: 'Service/item', label: 'Service/item' },
      { value: 'MRI Scan', label: 'MRI Scan' },
      { value: 'Blood Test', label: 'Blood Test' },
      { value: 'X-Ray Machine', label: 'X-Ray Machine' },
    ],
    [
      { value: 'Category', label: 'Category' },
      { value: 'Medical Equipment', label: 'Medical Equipment' },
      { value: 'Lab Services', label: 'Lab Services' },
      { value: 'Medicines', label: 'Medicines' },
    ],
    [
      { value: 'Status', label: 'Status' },
      { value: 'paid', label: 'paid' },
      { value: 'Unpaid', label: 'Unpaid' },
    ],
  ];

  return (
    <section className="sales-sec p-8">
      <div className="demographic-cards">
        <Cards data={salesData} />
      </div>

      <div className="flex justify-between py-4">
        <Heading title="Sales Management" />
        <Button
          img={filterimg}
          className="bg-primary px-8 h-10 text-white text-md font-base flex gap-x-2 hover:bg-blue-600"
          text="Filter"
        />
      </div>

      <div className="filter-sec flex gap-x-4 justify-around w-2/3 ml-auto">
        {dropDownData.map((item, index) => (
          <DropDown key={index} options={item} title={item[0].label} />
        ))}
      </div>
    </section>
  );
};

export default Sales;
