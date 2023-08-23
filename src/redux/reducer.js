const initState = {
    filters: {
        search: '',
        status: 'All',
        priority: [],
    },
    todoList: [
        {id: 11, name: 'Lean yoga', completed: false, priority: 'Medium'},
        {id: 12, name: 'Lean java', completed: true, priority: 'High'},
        {id: 13, name: 'Lean cook', completed: false, priority: 'Low'}
    ]
}
const rootReducer = (state = initState, action) => {
    /*
    {
    type: 'todoList/addTodo,
    payload: {id: 14, name: 'Lean run', completed: false, priority: 'Low'}
    }
     */
    console.log({state, action})
    switch (action.type) {
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state;
    }
};
export default rootReducer;