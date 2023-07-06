import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page,Search, Edit, Inject ,Toolbar} from '@syncfusion/ej2-react-grids';

import {  contextMenuItems, employeesGrid, ordersGrid } from '../data/dummy';
import { employeesData,ordersData } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded3xl'>
      <Header category="Page" title="Employees"/>
      <GridComponent  dataSource={employeesData} allowPaging  allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        toolbar={['Search']}
        width='auto'
        >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {employeesGrid.map((item,index)=>
          <ColumnDirective key={index} {...item}/>          
        )}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees