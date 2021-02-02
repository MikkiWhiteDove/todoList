import React, { useState, useEffect } from 'react';
import { Menu, Layout } from 'antd';
import axios from 'axios';
import classNames from 'classnames';

import{ List, AddList } from '../index.jsx';
import  './sidebarMod.scss';

const Sidebar = ({
    items,
    activeItem,
    setIsActiveItem,
}) => {


const {Content} = Layout;
    const [lists, setLists] = useState('');

    useEffect(() => {
        axios
            .get('http://localhost:3009/lists/')
            .then(({ data }) => {
                setLists(data);
            });
    }, []);

    const onAddList = obj => {
        const newList = [...lists, obj];
        setLists(newList);
    }
    return (
        <div className="todo__sidebar">
            <Content
            danger
                style={{
                    width: 300,
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed ',
                    left: 0,
                    background: '#fafafa',
                    padding: '0 25px',
                }}
            >
                <Menu >
                    {lists ? (
                        <List
                        items={lists}
                        onClick={() => setIsActiveItem(true)}
                        onRemove={id=> {
                            const newLists = lists.filter(item => item.id !== id);
                            setLists(newLists);
                            setIsActiveItem(false);
                        }}
                        activeItem={activeItem}
                        isRemovable
                        onAddList
                        setLists
                        />
                    ) : (
                        '3agryzka...'
                    )}
                    <AddList onAdd={onAddList}  />
                </Menu>
            </Content>
        </div>
    );
};

export default Sidebar;
