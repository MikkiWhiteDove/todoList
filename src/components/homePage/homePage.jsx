import React, { useEffect, useState} from 'react';

import { Layout, PageHeader, Button, Modal, Input } from 'antd';
import { EditFilled } from '@ant-design/icons';

import { Sidebar, TaskList } from '../index'

import './homePageMod.scss';

const {} = Layout;


const HomePage = () => {
    const [isActiveItem, setIsActiveItem] = useState('');
    const {} = Layout;
        return (
            <div className="todo">
                <Layout >
                        <Sidebar activeItem={isActiveItem} setIsActiveItem={setIsActiveItem}/>
                    <Layout
                        style={{ 
                        background:'#f0f0f0',
                        marginLeft: 300 
                    }}
                    >
                        <TaskList activeItem={isActiveItem} />
                    </Layout>
                </Layout>
            </div>
        )
};

export default HomePage;
