import React, { useEffect, useState} from 'react';

import { Layout, PageHeader, Button, Modal, Input } from 'antd';
import { EditFilled } from '@ant-design/icons';

import { Sidebar, Tasks } from '../index.jsx'

import './homePageMod.scss';

const {} = Layout;


const HomePage = () => {
    // const [activeItem, setActiveItem] = useState('');
    const {} = Layout;
        return (
            <div className="todo">
                <Layout >
                        <Sidebar />
                    <Layout
                        style={{ 
                        background:'#f0f0f0',
                        marginLeft: 300 }}
                    >
                        {/* {lists && activeItem && ( */}
                            <Tasks 
                                list={activeItem}
                            />
                        {/* )} */}
                                
                    </Layout>
                </Layout>
            </div>
        )
};

export default HomePage;
