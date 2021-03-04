import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from '../constants'



export const TastAdd = (id, text, date, isCompleted) => ({
    type: 'ADD_TASK',
    id,
    text,
    date,
    isCompleted
});

// export const removeTask = id => ({
//     type: REMOVE_TASK,
//     id
// });

// export const completeTask = id => ({
//     type: COMPLETE_TASK,
//     id
// });