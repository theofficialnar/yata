import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import AddTodo from './AddTodo';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 0, task: 'do something', isDone: false },
        { id: 1, task: 'ekk', isDone: false },
    ]);

    /**
     * Renders all the todos
     * @returns {JSX.Element} JSX element
     */
    const renderTodos = () =>
        todos.map((todo) => (
            <ListItem key={todo.id}>
                <TodoItem data={todo} onDataChanged={handleTodoChanged} />
            </ListItem>
        ));

    /**
     * Updates the todos when a todo has been changed
     * @param {Object} todoData Updated todo data
     */
    const handleTodoChanged = (todoData) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === todoData.id) {
                return todoData;
            }
            return todo;
        });

        setTodos(updatedTodos);
    };

    /**
     * Updates the todos state when new todo is added
     * @param {Object} newTodoData New todo data
     */
    const handleNewTodo = (newTodoData) => {
        const updatedTodos = [...todos, newTodoData];

        setTodos(updatedTodos);
    };

    return (
        <Grid container sx={{ mt: 10 }} justifyContent="center">
            <Grid item xs={12} md={6}>
                <Card>
                    <CardContent>
                        <List sx={{ py: 0 }}>{renderTodos()}</List>
                        <AddTodo onSubmitNewTodo={handleNewTodo} />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}

export default TodoList;
