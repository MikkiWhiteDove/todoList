import React, { useState, useEffect, useCallback } from 'react';
import { Menu, Layout } from 'antd';
import axios from 'axios';
import classNames from 'classnames';

import{ List, AddList } from '../index';
import style from './sidebar.module.scss';

import TasksService from '../../services/listService';

const Sidebar = ({
    activeItem,
    setIsActiveItem
}) => {
    
    const {Content} = Layout;
    const [lists, setLists] = useState([]);

    const [loading, setLoading] = useState(true);
  
    useEffect(async () => {
      const data = await TasksService.getList();
    //   console.log('==items', data);
      setLoading(false);
      setLists(data);
    }, []);



    // console.log(lists);
    // const onAddList = obj => {
    //     const newList = [...lists, obj];
    //     setLists(newList);
    // }

    const removelist = useCallback((listId) => {
        const newLists = lists.filter(list => list.id !== listId).concat();
        setLists(newLists);
    }, [setLists]);

    return (
        <div className={style.sidebar}>
            <Content danger >
                <Menu >
                    {loading && <span>Загружаем данные</span>}
                    {!loading && lists.map(list => 
                        <List
                        id={list.id}
                        lists={list.name}
                        />
                    // }
                    )}
                    <AddList 
                    // onAdd={onAddList}
                      />
                </Menu>
            </Content>
        </div>
    );
};

export default Sidebar;