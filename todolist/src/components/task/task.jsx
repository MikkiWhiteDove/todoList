import React from 'react';
import axios from 'axios';

import AddTaskForm from './addTaskForm';

import editSvg from "../../assets/img/edit.svg";

import  './taskMod.scss';

const Tasks = ({ list, onEditTitle, onAddTask }) => {

    const editTitle = () => {
        const newTitle = window.prompt('Название заголовка', list.name );
        if (newTitle) {
            onEditTitle(list.id, newTitle);
            axios.patch('http://localhost:3000/lists/' + list.id, {
                name: newTitle
            }).catch(() => {
                alert('Не удалось обновить название списка');
            });
        }
    };

    return (
        <div className="tasks">
            <h2 className="tasks_title">
                {list.name}
                <img onClick={editTitle} src={editSvg} alt="edit button"/>
            </h2>

            <div className="tasks_items">
                {list.tasks && !list.tasks.length &&(
                    <h2>Задачи отсутствуют</h2>
                )}
                {list.tasks && 
                    list.tasks.map(task => (
                        <div key={task.id} className="tasks_items_row">
                            
                            <div className="checkbox">
                                <input id={`task-${task.id}`} type="checkbox"/>
                                <label htmlFor={`task-${task.id}`}>
                                    <svg
                                        width="11"
                                        height="8"
                                        viewBox="0 0 11 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                                            stroke="#fff"
                                            stroke-width="1.5"                                        stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </label>
                            </div>
                            <input readOnly value={task.text} />
                        </div>
                ))}
                <AddTaskForm list={list} onAddTask={onAddTask} />
            </div>
        </div>
    );
};

export default Tasks;