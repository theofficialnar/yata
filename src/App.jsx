import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import TodoList from './components/TodoList';

const App = () => {
    return (
        <Container>
            <Stack alignItems="center" spacing={2}>
                <Typography borderBottom={4} variant="h1">
                    YATA
                </Typography>
                <Typography color="text.secondary" variant="body1">
                    Yet Another Todo App
                </Typography>
            </Stack>
            <TodoList />
        </Container>
    );
};

export default App;
