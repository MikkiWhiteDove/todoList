import React, {useEffect, useState} from 'react';

import {Layout, PageHeader, Button, Modal, Input} from 'antd';
import {EditFilled} from '@ant-design/icons';

import {Sidebar} from '../index.jsx'
import TaskList from '../taskList';


import './homePageMod.scss';

const {} = Layout;


const HomePage = () => {
  const [isActiveItem, setIsActiveItem] = useState(false);
  const {} = Layout;
  return (
    <div className="todo">
      <Layout>
        <Sidebar activeItem={isActiveItem} setIsActiveItem={setIsActiveItem} />
        <Layout
          style={{
            background: '#f0f0f0',
            marginLeft: 300
          }}
        >
          <TaskList isActiveItem={isActiveItem}/>
        </Layout>
      </Layout>
    </div>
  )
};

export default HomePage;
