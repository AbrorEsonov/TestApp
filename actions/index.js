export const addTodo = content => ({
        type: "ADD_TODO",
        payload: {
            label: content,
            id: Math.ceil(Math.random() * 100),
        }
    })
export const removeTodo = (id) => ({
        type: 'DELETE_TODO',
        payload: id
})