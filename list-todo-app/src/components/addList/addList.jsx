import React, { useState } from 'react';
import axios from 'axios';


import { Input, Menu, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './addListMod.scss'

const AddList = ( onAdd ) => {
    // const [isLoading, setIsLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const addList = () => {
        if (!inputValue) {
            window.confirm('spisok');
            return;
        }
        // setIsLoading(true);
        axios
            .post('http://localhost:3009/lists', {
                name: inputValue
            })
            .then(({ data }) => {
                const listObj = { ...data, tasks: [] };
                onAdd(listObj);
                // setInputValue('');
            })
            .catch(() => {
                window.confirm('lol');
            })
            .finally(() => {
                // setIsLoading(false);
            })
    }
    return (
        <div className="add-list">
               <Menu style={{display: 'flex'}} >
                  

                        <Input
                            value={inputValue}
                            onChange={e => setInputValue(e.target.value)}
                            type="text"
                            className="field"
                            placeholder="Название списка" />

                        <Button 
                            onClick={addList}
                            className="button"
                            type="primary"
                            >
                            <PlusOutlined  />
                        </Button>
              </Menu>
        </div>
    );
};

export default AddList
