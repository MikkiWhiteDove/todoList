import React, { useState } from 'react'
import axios from 'axios';

import addSvg from "../../assets/img/add.svg";

import  './taskMod.scss';

const AddTaskForm = ({ list, onAddTask}) => {
    const [visibleForm, setFormVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState('');

    const toggleFormVisible = () => {
        setFormVisible(!visibleForm);
        setInputValue('');
    }

    const addTask = () => {
        if(!inputValue) {
            alert('Введите название списка');
            return;
        }
        const obj = {
            listId: list.id,
            text: inputValue,
            completed: false
        };
        setIsLoading(true);
        axios.post(`http://localhost:3000/tasks`, obj)
        .then(({ data }) => {
            onAddTask(list.id, data);
            toggleFormVisible();
        }).catch(() => {
            alert('Ошибка');
        })
        .finally(() => {

            setIsLoading(false);
        });
    };

    return (
        <div className="tasks_form">
            {!visibleForm ? (
                <div onClick={toggleFormVisible} className="tasks_form_add">
                <img src={addSvg} alt="add button"/>
                <span>Новая задача</span>
            </div>
            ) : (
                <div className="tasks_form_block">
                    <input 
                        value={inputValue}
                        className="field"
                        type="text"
                        placeholder="Текст задачи"
                        onChange={e => setInputValue(e.target.value)} 
                    />
                    <button disabled={isLoading} onClick={addTask} className="button">
                        {isLoading ? 'Добавление...' : 'Добавить задачу'}</button>
                    <button onClick={toggleFormVisible} className="button button_grey">Отмена</button>
                </div>
            )}
        </div>
    );
};

export default AddTaskForm