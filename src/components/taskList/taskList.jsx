import React, {useEffect, useState, useCallback} from 'react';

import { List } from 'antd/lib/form/Form';
import { Button, Layout } from 'antd';
import { EditFilled } from '@ant-design/icons';
import axios from 'axios';

import TasksService from '../../services/taskService';
import { TaskItem, AddTask } from '../index'


const { Header, PageHeader, Content, Footer } = Layout;


const TaskList = () => {
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState([]);

    useEffect(async () => {
        const data = await TasksService.getList();
        setLoading(false);
        setItems(data);
      }, []);

    // const removeItem = useCallback((itemId) => {
    //     const newItems = items.filter(item => item.id !== itemId).concat();
    //     setItems(newItems);
    // }, [setItems]);

    return (
        <div className="todo__tasks">
                <Header
                    style={{
                        background: '#d9d9d9',
                        height: '10vw',
                    }}
                >
                    <div className="todo__tasks_header">
                        {/* <PageHeader
                            style={{
                                background: '#ffffff',
                            }}
                            title="Title"
                            extra={[
                                    <Button
                                        danger
                                        type="primary"
                                        // onClick={editTitle}
                                    >
                                        <EditFilled />
                                    </Button>,
                                ]}
                        /> */}
                    </div>
                </Header>
                <div className="todo__tasks_content">
                    
                            <Content 
                                style={{
                                    overflow: 'auto',
                                    padding: '10px 50px',
                                }}
                            >
                                <div className="lol">
                                {loading && <span>Загружаем данные</span>}
                                </div>
                                {!loading && items.map((item, index) => <TaskItem key={index} {...item}/>)}
                                {/* {items.map(item =>  <TaskItem id={item.id} key={item.id} task={item} onRemoveItem={removeItem} />)} */}
                                {/*isActiveItem: {+isActiveItem}*/}
                            </Content>
                    <Footer>
                        <AddTask />
                    </Footer>
                </div>
        </div>
    );
};

export default TaskList;