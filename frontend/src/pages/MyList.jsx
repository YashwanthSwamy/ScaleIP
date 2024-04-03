import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  Search,
  Inject,
  Toolbar
} from '@syncfusion/ej2-react-grids';
import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const MyList = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='My Lists' />
      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        contextMenuItems={contextMenuItems}
        toolbar={['Search']}
        width='auto'
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar, Filter, Sort]} />
      </GridComponent>
    </div>
  )
}

export default MyList;