import React, { useState } from 'react';
import { EditFilled, DeleteFilled, CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { Input, Popconfirm, Button, Switch, DatePicker } from 'antd';
import moment from "moment";
import axios from 'axios';



const Task = ( id, text, completed, list, onRemove, onEdit, onComplete) => {
    
    const onChangeCheckbox = e => {
        onComplete(list.id, e.target.checked)
    }
    
    function disabledDate(current) {
        let d = new Date();
        // let d = "2021-01-02";
        d.setDate(d.getDate() - 1);
        return current && current <= moment(d, "DD-MM-YYYY");
    }

    // function defaultDate(current) {
    //     let j = new Date();
    //     // let d = "2021-01-02";
    //     // d.setDate(d.getDate() - 1);
    //     return current && current == moment(j, "DD-MM-YYYY");
    // }


    function onChange(date, dateString) {
        console.log(date, dateString);
      }
    // const [visibleForm, setVisibleForm] = useState(false);
    // const removeList = item => {
    //     if (window.confirm('Вы действительно хотите удалить список?')) {
    //         axios.delete(`http://localhost:3000/lists/` + item.id).then(() => {
    //             onRemove(item.id);
    //         });
    //     }
    // };

    // function onChange(checked) {
    //     console.log(`switch to ${checked}`);
    //   }

    return (
        <div key={1} className="task" style={{
            // float: 'left',
            
            
            }}>
                            
        
           <div className="task__switch">
           {/* <Button> */}
           <Switch unChecked
           onChange={onChangeCheckbox}
           id={`task-${id}`}
           type="checkbox"
           checked={completed}
           checkedChildren={<CheckOutlined />}
           unCheckedChildren={<CloseOutlined />} />
           {/* </Button>  */}
           </div>
            
            <div className="task__input"> 
                <Input 
                    placeholder="Basic usage"
                    readOnly value={ text}
                />
            </div>
       
            <div className="task__datepicker">
            <Input 
                    placeholder= 'Дата окончания ' value={disabledDate}
                    
                    readOnly 
                    
                />
                {/* <DatePicker

                    danger
                    format="DD-MM-YYYY"
                    // defaultValue={defaultDate}
                    readOnly value={disabledDate}
                    disabledDate={disabledDate} 
                    onChange={onChange}
                /> */}
            </div>
        
            <div
                onClick={() => onEdit(list.id, { id, text })}
                className="task__btn-edit"
            >
                <Button danger ><EditFilled /></Button>
            </div>
            <div
                onClick={() => onRemove(list.id, id)}
                className="task__btn-delete">
                <Popconfirm danger title="Are you sure delete this task?" okText="Yes" cancelText="No">
                    <Button danger><DeleteFilled /></Button>
                </Popconfirm>
            </div> 
        </div>
    );
}

export default Task;