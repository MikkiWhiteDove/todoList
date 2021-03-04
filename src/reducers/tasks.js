import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constants'

const TASKS = [
    {
        id: 1,
        text: 'zhj',
        date: '02.02.2021',
        completed: true
      },
      {
        id: 2,
        text: 'dxfcgvh',
        date: '02.02.2021',
        completed: false
      },
      {
        id: 3,
        text: 'ствлоимл',
        date: '02.02.2021',
        completed: false
      }
]


const tasks = (state = TASKS, { id, text, date, isCompleted, type }) => {
    switch (type) {
        case ADD_TASK :
            return [
                ...state, {
                    id,
                    text,
                    date,
                    isCompleted
                }
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id);
            case COMPLETE_TASK:
                return [...state].map(task => {
                    if(task.id === id) {
                        task.isCompleted = !task.isCompleted;
                    }
                    return task;
                });
        default:
            return state;
    }
}

export default tasks;