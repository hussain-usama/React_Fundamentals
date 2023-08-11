class Todos{
    constructor(){
        this.todos=[];
    }
    getTodos(){
        return this.todos;
    };
    addTodos(addtext){
        this.todos.push(addtext)
    }
}
export default Todos;