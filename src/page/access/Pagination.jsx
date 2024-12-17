import React from 'react';
import { Pagination as AntPagination } from 'antd';const onShowSizeChange = (current, pageSize) => {
  console.log(current, pageSize);
};

const AccessPagination = () => {
  return (
    <div className='pagination-sec flex justify-center mt-8'>
    <AntPagination
      onShowSizeChange={onShowSizeChange}
      defaultCurrent={3}
      total={400}
      align={'center'}
    />

      
    </div>
  )
}

export default AccessPagination
