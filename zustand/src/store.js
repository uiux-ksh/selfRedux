import create from 'zustand';

const useTodoStore = create((set) => ({
    todos:[],
    addTodo:(newTodo) => set((state) =>({
        todos:[newTodo,...state.todos]
    })),
    removeTodo:(id) => set((state) =>({
        todos:state.todos.length === 1 ? [] : state.todos.filter((todo,i) => i!== id )
    }))
}))


export default  useTodoStore;