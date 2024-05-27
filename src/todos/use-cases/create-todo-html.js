
/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('A TODO object is required')

    const html = `
                <div class="view">
                    <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
                    <label>${todo.description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
            
    `
    const listElement = document.createElement('li')
    listElement.innerHTML = html
    listElement.setAttribute('data-id', todo.id)

    if (todo.done) listElement.classList.add('completed')

    return listElement
}