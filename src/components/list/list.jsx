import React from 'react';
import { Menu } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import axios from 'axios';

import  './listMod.scss';

const List = ( {id, lists, onRemove}
 ) => {
    const removeList = item => {
        if (window.confirm('delete?')) {
            axios.delete('http://localhost:3009/lists/' + item.id).then(() => {
                onRemove(item.id);
            })
        }
    }
    return (
        <div 
            id
        // onClick={onClick} className="list"
        >
         <Menu>
                <Menu.Item 
                >
                    <div className="todo__list_menu">
                        <div className="todo__list_name">
                            <span>
                                {lists}
                            </span>
                        </div>
                        <div className="todo__list_btn-close">
                            <CloseOutlined
                            />
                        </div>
                    </div>
            </Menu.Item>
        </Menu> 
        </div>   
    );
};

export default List;