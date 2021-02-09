import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditFilled, DeleteFilled, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Input, Popconfirm, Button, Switch, Checked, unChecked } from 'antd';
import moment from "moment";
import axios from 'axios';

import styles from './styles.module.scss';


const TaskItem = ( { listId, date, text, completed, id } ) => {
    
    const [che, setChe] = useState(completed);



    const lol = () => {
        setChe(!che);
        completed = che;
    }
    // const l = (che) => {
    //     return(che ?
    //          checked : unChecked)
    // }

    // function disabledDate(current) {
    //     let d = new Date();
    //     // let d = "2021-01-02";
    //     d.setDate(d.getDate() - 1);
    //     return current && current <= moment(d, "DD-MM-YYYY");
    // }

    // const res = l(che);
    // console.log(res);
    return (
        <div className={styles.taskItem} >
            <div className={styles.switch}>
           <Switch 
            res
               onClick={lol}
        //    {{che} ? Checked : unChecked}
        //    {checked && Checked}
        //    {!checked && unChecked}
        //    {completed && checked} 
        //    onChange={onChangeCheckbox}  {completed} ? (Checked) : (unChecked)
           // type="checkbox"
           // checked={completed}
           checkedChildren={<CheckOutlined />}
           unCheckedChildren={<CloseOutlined />} />
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
                <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No" >
                    <Button><DeleteFilled /></Button>
                </Popconfirm>
            </div> 
        </div>
    );
}

// TaskItem.propTypes = {
//     task: PropTypes.objectOf(PropTypes.any),
//     onRemoveItem: PropTypes.func,
//   };

export default TaskItem;