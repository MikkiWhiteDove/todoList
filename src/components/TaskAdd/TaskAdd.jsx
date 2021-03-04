import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Input, Button } from 'antd';
// import { PoweroffOutlined } from '@ant-design/icons';       
import moment from "moment";


import styles from './style.module.scss';
import TaskItem from '../TaskItem';



const TaskAdd = ({ value, onChange }) => {
    const [inputValue, setInputValue] = useState('');
    // const [inputValueDate, setInputValueDate] = useState('');
    // const [isLoading, setIsLoading] = useState('');

    // function disabledDate(current) {
    //     let d = new Date();
    //     d.setDate(d.getDate() - 1);
    //     return current && current <= moment(d, "DD.MM.YYYY");
    // }
        return (
            <div className={styles.taskAdd}>
            <div className={styles.taskInput}>
                <Input 

                    type="text"
                    placeholder="Текст задачи"
                    onChange={onChange}
                    value={value} 
                    // onKeyPress={onKeyPress}
                />
            </div>
            {/* <div className={styles.datePiker}>
                <DatePicker
                    format="DD.MM.YYYY"
                    type="text"
                    disabledDate={disabledDate}
                />
            </div> */}
            <div className={styles.btnAdd}>
                <Button
                    // onClick={AddTask}
                    // type="primary"
                    danger
                >Добавить задачу
                </Button>
            </div>
        </div>
        )
};
TaskAdd.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
}
TaskAdd.defaultProps ={
    onChange: () => {},
    value: '',
}

export default TaskAdd;