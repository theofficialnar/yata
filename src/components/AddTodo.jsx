import { useState } from 'react';
import Button from '@mui/material/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import { nanoid } from 'nanoid';

function AddTodo({ onSubmitNewTodo }) {
    const [isFormVisible, setFormVisibility] = useState(false);
    const [newTodo, setNewTodo] = useState({
        isDone: false,
        task: '',
    });

    /**
     * Updates the new todo state when changes are made
     * @param {Object} evt Event data object
     */
    const handleTodoChanged = (evt) => {
        const { name } = evt.target;
        const value = name === 'task' ? evt.target.value : evt.target.checked;

        setNewTodo({
            ...newTodo,
            [name]: value,
        });
    };

    /**
     * Submits the new todo
     */
    const handleSubmitNewTodo = () => {
        if (newTodo.task === '') {
            setFormVisibility(false);
            return;
        }

        const todo = {
            ...newTodo,
            id: nanoid(),
        };

        onSubmitNewTodo(todo);

        setNewTodo({
            isDone: false,
            task: '',
        });
        setFormVisibility(false);
    };

    /**
     * Renders the text field for adding new todos
     * @returns {JSX.Element}
     */
    const renderTextField = () => {
        if (isFormVisible) {
            return (
                <ListItem>
                    <Checkbox name="isDone" onChange={handleTodoChanged} />
                    <TextField
                        fullWidth
                        autoFocus
                        placeholder="List something"
                        variant="standard"
                        name="task"
                        onChange={handleTodoChanged}
                        onBlur={handleSubmitNewTodo}
                    />
                </ListItem>
            );
        }

        return null;
    };

    return (
        <>
            {renderTextField()}
            <Button
                sx={{ mx: 3, mt: 1 }}
                onClick={() => setFormVisibility(true)}
                startIcon={<AddRoundedIcon />}
            >
                List Todo
            </Button>
        </>
    );
}

export default AddTodo;
