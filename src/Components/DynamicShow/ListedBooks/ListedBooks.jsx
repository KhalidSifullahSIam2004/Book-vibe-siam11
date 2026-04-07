import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from '../ReadList/ReadList';
import WishList from '../WishList/WishList';

const ListedBooks = () => {
    
    return (
        <div className='container mx-auto'>
           <h1 className='bg-gray-200 text-3xl font-bold py-8 rounded-2xl text-center my-9'>Books</h1>

             <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wish Books</Tab>
    </TabList>

    {/* read */}
    <TabPanel>
      <ReadList/>
    </TabPanel>


    {/* wish */}
    <TabPanel>
      <WishList/>
    </TabPanel>
  </Tabs>
        
        </div>
    );
};

export default ListedBooks;