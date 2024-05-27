import { Todo } from "../todos/models/todos.models";


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del timepo')
    ],
    filter: Filters.All
}

const initStore = () => {
    loadStore()
    console.log('InitStore ')
}

const loadStore = () => {
    if (!localStorage.getItem('state')) return

    const {todos = [], filter = Filters.All} = JSON.parse(loadStore.getItem('state'))
    state.todos = todos
    state.filter = filter
}

const saveStateTodoLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]

        case Filters.Completed:
            return state.todos.filter(todo => todo.done)

        case Filters.Pending:
            return state.todos.filter(todo => !todo.done)

        default:
            throw new Error(`Option ${filter} is not valid`)
    }
}

/**
 * 
 * @param {Stirng} todo 
 */
const addTodo = (description) => {
    if (!description) throw new Error('Description is required')
    state.todos.push(new Todo(description))

    saveStateTodoLocalStorage()

}

const toggleTodo = (todoId) => {

    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done
        }

        return todo
    })
    saveStateTodoLocalStorage()

}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
    saveStateTodoLocalStorage()
}

export const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done)
    saveStateTodoLocalStorage()
}

/**
 * …
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter
    saveStateTodoLocalStorage(ß)
}

const getCurrentFilter = () => {
    return state.filter
}



export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initStore,
    loadStore,
    setFilter,
    getTodos,
    Filters,
    toggleTodo
}