const todos = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_TODO':
      //{type: 'ADD_TODO', todo: 'Buy Milk' }
      return [action.todo, ...state]
    case 'TOGGLE_TODO':
      return state.map( todo => {
        if (todo.id === action.id)
          return {...todo, complete: !todo.complete}
        return todo
      })
    default:
      return state;
  }
}

export default todos;