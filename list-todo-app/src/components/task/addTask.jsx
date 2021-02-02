import React, { useState } from 'react'
import { DatePicker, Space, Input, Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import moment from "moment";
import axios from 'axios';

// import "response-datepicker / dist / response-datepicker.css"

import  './taskMod.scss';

const AddTask = ({ item, list, onAddTask}) => {
    const [inputValue, setInputValue] = useState('');
    const [inputValueDate, setInputValueDate] = useState('');
    const [isLoading, setIsLoading] = useState('');

    function disabledDate(current) {
        let d = new Date();
        d.setDate(d.getDate() - 1);
        return current && current <= moment(d, "DD-MM-YYYY");
    }

    // function defaultDate(current) {
    //     let j = new Date();
    //     return current && current == moment(j, "DD-MM-YYYY");
    // }

    // function onChange(date, dateString) {
    //     console.log(date, dateString);
    //   }

    const addTask = () => {
        if (!inputValue ||
            !inputValueDate) {
                window.confirm('dobavit');
            return;
        }
        const obj = {
            listId: list.id,
            text: inputValue,
            date: inputValueDate,
            completed: false,
        };
        setIsLoading(true);
        axios
            .post('http://localhost:3009/tasks', obj)
            .then(({ data }) => {
                onAddTask(list.id, data);
                setInputValue('');
                setInputValueDate('');
            })
            .catch(t => {
                window.confirm('Error addTask!');
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <div className="tasks__add_form">
            <div className="tasks__add-input">
                <Input 
                    value={inputValue}
                    type="text"
                    placeholder="Текст задачи"
                    onChange={t => setInputValue(t.target.value)}
                />
            </div>
            <div className="tasks__add-date">
                <DatePicker
                    format="DD-MM-YYYY"
                    type="text"
                    disabledDate={disabledDate}
                    value={inputValueDate}
                    onChange={d => setInputValueDate(d.target.value)}
                />
            </div>
            <div className="tasks__add-btn">
                <Button
                    onClick={AddTask}
                    type="primary"
                    danger
                >
                    {isLoading && 'Добавление...'}
                    {!isLoading && 'Добавить задачу'}
                </Button>
            </div>
        </div>
    );
};

export default AddTask