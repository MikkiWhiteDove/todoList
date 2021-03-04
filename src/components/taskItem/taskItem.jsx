import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Input, Button } from 'antd';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

import styles from './style.module.scss'


const TaskItem = ({ id, text, date, isCompleted, removeTask, completeTask }) => {
        return (
            <div className={styles.taskItem} >

            <div className={styles.switch}>
            <Checkbox  onChange={isCompleted ? 'checked' : 'unchecked'}/>
           </div>
            <div className={styles.input}>
                <Input value={text} readOnly />
            </div>
            <div className={styles.datePickerer}>
                <Input value={date} readOnly />
            </div>
            <div className={styles.btnEdit}>
                <Button danger><EditFilled /></Button>
            </div>
            <div className={styles.btnDelete} >
                    <Button><DeleteFilled /></Button>
            </div>
    </div>
        )
};

TaskItem.propTypes = {
    text: PropTypes.string,
    date: PropTypes.string,
    isCompleted: PropTypes.bool,
    removeTasks: PropTypes.func,
    id: PropTypes.string,
};

TaskItem.defaultProps = {
    text: '',
    date: '',
    isCompleted: false,
    removeTasks: () => {},
    id: '',

};

export default TaskItem;
