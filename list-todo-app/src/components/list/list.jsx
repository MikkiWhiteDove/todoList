import React from 'react';
import { Menu } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import axios from 'axios';

import  './listMod.scss';

const List = ({items, onRemove, activeItem, onClick }) => {

    const removeList = item => {
        if (window.confirm('delete?')) {
            axios.delete('http://localhost:3009/lists/' + item.id).then(() => {
                onRemove(item.id);
            })
        }
    }
    return (
        <div onClick={onClick} className="list">
        <Menu>
            {items.map((item, index) => (
                <Menu.Item 
                    key={index}
                    className={classNames(item.className, {
                        active: item.active
                            ? item.active
                            : activeItem && activeItem.id === item.id
                    })}
                >
                    <div className="todo__list_menu">
                        <div className="todo__list_name">
                            <span>
                                {item.name}
                                {item.tasks && ` (${item.tasks.length})`}
                            </span>
                        </div>
                        <div className="todo__list_btn-close">
                            <CloseOutlined
                                
                                onClick={() => removeList(item)}
                            />
                        </div>
                    </div>
            </Menu.Item>
            ))}
        </Menu>
        </div>   
    );
};

export default List;